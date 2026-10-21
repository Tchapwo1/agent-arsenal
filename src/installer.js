import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SKILLS_DIR = path.resolve(__dirname, '../skills');
const COMMANDS_DIR = path.resolve(__dirname, '../commands');

export function detectEnvironment(cwd = process.cwd()) {
  if (fs.existsSync(path.join(cwd, '.claude'))) {
    return {
      name: 'Claude Code',
      skillsDir: path.join(cwd, '.claude', 'skills'),
      commandsDir: path.join(cwd, '.claude', 'commands'),
    };
  }
  if (fs.existsSync(path.join(cwd, '.cursor')) || fs.existsSync(path.join(cwd, '.cursorrules'))) {
    return {
      name: 'Cursor',
      skillsDir: path.join(cwd, '.cursor', 'skills'),
      commandsDir: null,
    };
  }
  if (fs.existsSync(path.join(cwd, '.agent'))) {
    return {
      name: 'Antigravity / Agent',
      skillsDir: path.join(cwd, '.agent', 'skills'),
      commandsDir: null,
    };
  }
  // Universal workspace: default to supporting both Claude commands and skills
  return {
    name: 'Universal Workspace (Claude & Cursor Ready)',
    skillsDir: path.join(cwd, '.claude', 'skills'),
    commandsDir: path.join(cwd, '.claude', 'commands'),
  };
}

export function installSkills(skillsToInstall, options = {}) {
  const cwd = options.cwd || process.cwd();
  const env = detectEnvironment(cwd);
  const targetDir = env.skillsDir;

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const installed = [];

  for (const skill of skillsToInstall) {
    const sourceFile = path.join(SKILLS_DIR, skill.filename);
    if (!fs.existsSync(sourceFile)) {
      throw new Error(`Skill file not found: ${skill.filename}`);
    }

    const destFile = path.join(targetDir, skill.filename);
    const content = fs.readFileSync(sourceFile, 'utf8');
    fs.writeFileSync(destFile, content, 'utf8');
    installed.push(skill);
  }

  // Also install Claude Code slash commands if commandsDir is configured
  if (env.commandsDir && fs.existsSync(COMMANDS_DIR)) {
    if (!fs.existsSync(env.commandsDir)) {
      fs.mkdirSync(env.commandsDir, { recursive: true });
    }
    const commandFiles = fs.readdirSync(COMMANDS_DIR);
    for (const file of commandFiles) {
      const srcPath = path.join(COMMANDS_DIR, file);
      const destPath = path.join(env.commandsDir, file);
      fs.copyFileSync(srcPath, destPath);
    }
  }

  return {
    installed,
    targetDir,
    commandsDir: env.commandsDir,
    envName: env.name,
  };
}
