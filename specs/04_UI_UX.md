# 🎨 Pillar 4: UI / UX Design Specification — Agent Arsenal

## Visual Identity & CLI Aesthetic
Agent Arsenal follows an **Obsidian & Electric Cyan** aesthetic, optimized for high-contrast dark developer terminals.

### Color Palette:
- **Primary / Brand Cyan:** `chalk.cyanBright` / `#00f0ff`
- **Success / Signal Green:** `chalk.greenBright` / `#00ff66`
- **Warning / Accent Amber:** `chalk.yellowBright` / `#ffcc00`
- **Surgical Red / Alert:** `chalk.redBright` / `#ff3366`
- **Muted Obsidian / Dim:** `chalk.gray` / `#666666`

---

## Terminal Boxen Layouts

### 1. Catalog Display (`agent-arsenal list`)
```text
╭────────────────────────────────────────────────────────────╮
│                  ⚡ AGENT ARSENAL v1.0.0                   │
│         The Superpower Skill Suite for AI Coding Agents     │
╰────────────────────────────────────────────────────────────╯

 [1] anti-bloat       → Forces agents to write 60% less code & zero junk
 [2] diagram-craft    → Generates clean ASCII & Mermaid technical diagrams
 [3] security-shield  → Scans agent diffs for leaked secrets & injection
 [4] apple-polish     → Injects Linear/Apple typography & micro-interactions
 [5] reverse-engineer → Deconstructs curl traces & APIs into Zod/TS schemas
 [6] git-surgeon      → Compresses messy trial-and-error commits into PRs
 [7] sql-optimizer    → Index-aware, zero-N+1 SQL query optimization
 [8] api-contract     → Enforces strict frontend/backend type contracts
 [9] copy-surgeon     → Strips dead-giveaway AI buzzwords from UI
 [10] test-sniper     → Edge-case boundary tests instead of bloated coverage

 Run: npx agent-arsenal add <skill-name>
```

---

## UX Principles
1. **Zero Configuration:** Runs instantaneously without setup or prompts.
2. **Instant Feedback:** Spinners give way to clean Unicode checks in < 150ms.
3. **Copy-Paste Readability:** Every install prints the exact prompt keyword to invoke the skill immediately in Cursor or Claude.
