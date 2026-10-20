# 📋 Pillar 6: Implementation Plan — Agent Arsenal

## Milestones & Definition of Done

- [x] **Milestone 1: 6-Pillar Spec Blueprint**
  - Populated `specs/01_PRD.md` through `06_IMPLEMENTATION_PLAN.md`.

- [ ] **Milestone 2: 10 Core Skill Definitions**
  - Author high-signal, zero-dependency skill files in `skills/`:
    1. `anti-bloat.md`
    2. `diagram-craft.md`
    3. `security-shield.md`
    4. `apple-polish.md`
    5. `reverse-engineer.md`
    6. `git-surgeon.md`
    7. `sql-optimizer.md`
    8. `api-contract.md`
    9. `copy-surgeon.md`
    10. `test-sniper.md`

- [ ] **Milestone 3: Universal CLI Engine**
  - Scaffolding `package.json` with executable bin.
  - Implement `src/catalog.js`, `src/installer.js`, `src/auditor.js`, `src/ui.js`.
  - Wire up `bin/agent-arsenal.js` with `list`, `add`, and `audit` subcommands.

- [ ] **Milestone 4: Local Verification & Test Suite**
  - Test `list`, `add anti-bloat`, and `add --all` in simulated workspace.
  - Verify file system permissions, formatting, and chalk rendering.

- [ ] **Milestone 5: Open-Source Packaging & GitHub Launch**
  - High-impact `README.md` with ASCII art, badges, quick-start, and one-click copy snippets.
  - `LICENSE` (MIT) and `.gitignore`.
  - Git init, commit, and push to GitHub `Tchapwo1/agent-arsenal` via `gh repo create`.
