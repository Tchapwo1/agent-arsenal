import chalk from 'chalk';
import boxen from 'boxen';

export function renderBanner() {
  const art = `
   █████╗  ██████╗ ███████╗███╗   ██╗████████╗     █████╗ ██████╗ ███████╗███████╗███╗   ██╗ █████╗ ██╗     
  ██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝    ██╔══██╗██╔══██╗██╔════╝██╔════╝████╗  ██║██╔══██╗██║     
  ███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║       ███████║██████╔╝███████╗█████╗  ██╔██╗ ██║███████║██║     
  ██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║       ██╔══██║██╔══██╗╚════██║██╔══╝  ██║╚██╗██║██╔══██║██║     
  ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║       ██║  ██║██║  ██║███████║███████╗██║ ╚████║██║  ██║███████╗
  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
  `;

  console.log(chalk.cyanBright(art));
  console.log(chalk.gray('  The Superpower Skill Suite for AI Coding Agents | by @Tchapwo1\n'));
}

export function renderCatalog(skills) {
  let content = `${chalk.bold.white('AVAILABLE SUPERPOWER SKILLS (10/10)')}\n\n`;

  skills.forEach((skill, idx) => {
    const num = chalk.cyanBright(`[${String(idx + 1).padStart(2, '0')}]`);
    const name = chalk.bold.greenBright(skill.id.padEnd(16));
    const cat = chalk.dim(`(${skill.category})`);
    content += `${num} ${name} ${cat}\n    ${chalk.gray(skill.description)}\n\n`;
  });

  content += chalk.yellowBright('💡 Install a skill:') + chalk.white(' npx agent-arsenal add <skill-name>\n');
  content += chalk.yellowBright('🚀 Install all:    ') + chalk.white(' npx agent-arsenal add --all\n');

  console.log(
    boxen(content.trim(), {
      padding: 1,
      margin: { top: 0, bottom: 1 },
      borderStyle: 'round',
      borderColor: 'cyan',
    })
  );
}

export function renderSuccess(installedSkills, targetPath, detectedEnv) {
  let content = `${chalk.bold.greenBright('✔ SKILL(S) INSTALLED SUCCESSFULLY')}\n\n`;
  content += `${chalk.bold.white('Target Environment:')} ${chalk.cyanBright(detectedEnv)}\n`;
  content += `${chalk.bold.white('Installed Path:')}     ${chalk.gray(targetPath)}\n\n`;
  content += `${chalk.bold.white('Active Skills:')}\n`;

  installedSkills.forEach((s) => {
    content += `  ${s.emoji}  ${chalk.greenBright(s.id)} ${chalk.dim('— ' + s.triggers[0])}\n`;
  });

  content += `\n${chalk.bold.yellowBright('👉 In Claude Code (Terminal Slash Commands):')}\n`;
  content += chalk.white(`   Type: ${chalk.greenBright(`/skill ${installedSkills[0]?.id || 'anti-bloat'}`)}  or direct shorthand: ${chalk.greenBright(`/${installedSkills[0]?.id || 'anti-bloat'}`)}\n\n`);

  content += `${chalk.bold.yellowBright('👉 In Cursor / Claude Projects:')}\n`;
  content += chalk.white(`   Prompt: "Apply the ${installedSkills[0]?.id || 'anti-bloat'} skill to this task."\n`);

  console.log(
    boxen(content.trim(), {
      padding: 1,
      margin: { top: 1, bottom: 1 },
      borderStyle: 'round',
      borderColor: 'green',
    })
  );
}
