import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SKILLS_DIR = path.resolve(__dirname, '../skills');

export function detectEnvironment(cwd = process.cwd()) {
  if (fs.existsSync(path.join(cwd, '.cursor')) || fs.existsSync(path.join(cwd, '.cursorrules'))) {
    return { name: 'Cursor', dir: path.join(cwd, '.cursor', 'skills') };
  }
  if (fs.existsSync(path.join(cwd, '.claude'))) {
    return { name: 'Claude Code', dir: path.join(cwd, '.claude', 'skills') };
  }
  if (fs.existsSync(path.join(cwd, '.agent'))) {
    return { name: 'Antigravity / Agent', dir: path.join(cwd, '.agent', 'skills') };
  }
  // Universal fallback for any workspace
  return { name: 'Universal Workspace', dir: path.join(cwd, '.agent-skills') };
}

export function installSkills(skillsToInstall, options = {}) {
  const cwd = options.cwd || process.cwd();
  const env = detectEnvironment(cwd);
  const targetDir = env.dir;

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

  return {
    installed,
    targetDir,
    envName: env.name,
  };
}
