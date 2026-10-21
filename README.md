# ⚡ Agent Arsenal

> **The Definitive Superpower Skill Suite for AI Coding Agents.**  
> Drop-in engineering skills for **Cursor**, **Claude Code**, **Windsurf**, and **Copilot** that eliminate code bloat, generate publication-grade diagrams, harden security, and enforce Apple/Linear craft.

[![Live Playground](https://img.shields.io/badge/Live_Playground-vernedaily.xyz%2Farsenal-00F0FF?style=for-the-badge&logo=cloudflare&logoColor=black)](https://vernedaily.xyz/arsenal)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org)
[![Cursor Ready](https://img.shields.io/badge/Cursor-Supported-purple.svg)](https://cursor.com)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Supported-orange.svg)](https://anthropic.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Tchapwo1/agent-arsenal)

---

## 🌐 Instant Web Playground (1-Click Copy)

Explore and copy all 10 skills directly from your browser without terminal:  
👉 **[vernedaily.xyz/arsenal](https://vernedaily.xyz/arsenal)**

---

## ⚡ 1-Second Quick Start

### Install into Claude Code (Native Slash Commands)

Run in your project root:
```bash
# Installs skills AND native Claude Code slash commands
npx agent-arsenal add --all
```

Then in your Claude Code session, simply type:
```text
/skill anti-bloat
```
Or use the direct shorthand commands:
* `/anti-bloat` — Force minimal code, zero classes, and surgical diffs
* `/diagram` — Generate publication-grade ASCII system maps or Mermaid charts
* `/security` — Audit code for prompt injection, leaked keys, and SQLi
* `/polish` — Apply Apple/Linear design tokens and micro-elevations

---

### Install into Cursor (.cursorrules)
```bash
npx agent-arsenal add anti-bloat
```

---

## 💎 The 10 Superpower Skills

| # | Skill | Category | What It Forces Your AI Agent To Do |
| :---: | :--- | :--- | :--- |
| **01** | [`anti-bloat`](./skills/anti-bloat.md) | **Code Quality** | **Cuts agent code bloat by 60%.** Bans speculative factory classes, prohibits redundant wrappers, and strictly enforces surgical diffs instead of full-file rewrites. |
| **02** | [`diagram-craft`](./skills/diagram-craft.md) | **Architecture** | Generates publication-grade ASCII schematics, sequence diagrams, and Mermaid state machines. |
| **03** | [`security-shield`](./skills/security-shield.md) | **Security** | Scans proposed diffs for leaked API keys, SQL injections, SSRF endpoints, and indirect prompt injection. |
| **04** | [`apple-polish`](./skills/apple-polish.md) | **UI/UX Design** | Injects Apple & Linear design tokens (concentric radii, layered micro-elevations, optical tracking, tactile micro-interactions). |
| **05** | [`reverse-engineer`](./skills/reverse-engineer.md) | **Data & APIs** | Deconstructs raw curl traces, payloads, and undocumented JSON into typed TypeScript interfaces and Zod schemas. |
| **06** | [`git-surgeon`](./skills/git-surgeon.md) | **Git & Release** | Squashes messy iterative agent commits into atomic conventional commits and executive-grade PR summaries. |
| **07** | [`sql-optimizer`](./skills/sql-optimizer.md) | **Database** | Eliminates deadly N+1 query loops, missing composite indexes, and dangerous table locks during migrations. |
| **08** | [`api-contract`](./skills/api-contract.md) | **Data & APIs** | Guarantees end-to-end type safety, runtime boundary validation, and RFC 7807 error parity between client and server. |
| **09** | [`copy-surgeon`](./skills/copy-surgeon.md) | **Copywriting** | Strikes telltale AI buzzwords (*"delve", "tapestry", "seamlessly", "testament"*) in favor of punchy, human microcopy. |
| **10** | [`test-sniper`](./skills/test-sniper.md) | **Testing** | Crafts high-signal boundary, race-condition, and edge-case unit tests instead of superficial happy-path fluff. |

---

## 🛠️ Manual Installation (Without CLI)

Prefer zero tooling? You can copy any skill directly:

### For Cursor (`.cursorrules` or `.cursor/skills/`)
1. Create a `.cursor/skills/` folder in your project root.
2. Copy any file from [`skills/`](./skills/) into `.cursor/skills/anti-bloat.md`.
3. In Cursor chat, type:
   > *"Apply the anti-bloat skill to refactor this service."*

### For Claude Code (`.claude/skills/`)
1. Create a `.claude/skills/` directory.
2. Place the markdown skill inside.
3. Claude Code will automatically ingest it into its operational context.

---

## 🤝 Contributing

We welcome community-contributed agent skills!
1. Fork the repo
2. Create a new skill in `skills/your-skill.md` following the [Schema Contract](./specs/05_SCHEMA.md)
3. Register it in `src/catalog.js`
4. Submit a PR!

---

## 📄 License

MIT © [Tchapwo1](https://github.com/Tchapwo1)
