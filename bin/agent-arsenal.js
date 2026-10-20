#!/usr/bin/env node

import { Command } from 'commander';
import { SKILLS } from '../src/catalog.js';
import { renderBanner, renderCatalog, renderSuccess } from '../src/ui.js';
import { installSkills } from '../src/installer.js';
import chalk from 'chalk';
import ora from 'ora';

const program = new Command();

program
  .name('agent-arsenal')
  .description('The Superpower Skill Suite for AI Coding Agents')
  .version('1.0.0');

// Command: list
program
  .command('list')
  .description('List all 10 superpower agent skills')
  .action(() => {
    renderBanner();
    renderCatalog(SKILLS);
  });

// Command: add <skill-name>
program
  .command('add [skill]')
  .description('Install a skill into your current workspace (.cursor, .claude, etc.)')
  .option('-a, --all', 'Install all 10 superpower skills')
  .action((skillName, options) => {
    renderBanner();

    let targetSkills = [];

    if (options.all || skillName === 'all') {
      targetSkills = SKILLS;
    } else if (skillName) {
      const found = SKILLS.find(
        (s) => s.id.toLowerCase() === skillName.toLowerCase() || s.name.toLowerCase() === skillName.toLowerCase()
      );
      if (!found) {
        console.log(chalk.redBright(`✖ Skill "${skillName}" not found.`));
        console.log(chalk.gray(`Run ${chalk.cyan('npx agent-arsenal list')} to see all available skills.`));
        process.exit(1);
      }
      targetSkills = [found];
    } else {
      console.log(chalk.yellowBright('⚠️  Please specify a skill name or use --all:'));
      console.log(chalk.white('   npx agent-arsenal add anti-bloat'));
      console.log(chalk.white('   npx agent-arsenal add --all\n'));
      renderCatalog(SKILLS);
      return;
    }

    const spinner = ora(chalk.cyan(`Installing ${targetSkills.length} skill(s)...`)).start();

    try {
      const result = installSkills(targetSkills);
      spinner.succeed(chalk.green(`Installed ${result.installed.length} skill(s)`));
      renderSuccess(result.installed, result.targetDir, result.envName);
    } catch (err) {
      spinner.fail(chalk.red(`Installation failed: ${err.message}`));
      process.exit(1);
    }
  });

// Default action (if no command passed)
if (!process.argv.slice(2).length) {
  renderBanner();
  renderCatalog(SKILLS);
} else {
  program.parse(process.argv);
}
