# ⚙️ Pillar 2: Technical Requirements Document (TRD) — Agent Arsenal

## Architecture Overview
Agent Arsenal is architected with a dual-layer approach:
1. **Layer 1: Portable Declarative Skills (`skills/*.md`):** Zero-dependency markdown files adhering to the modern Skill Specification standard (YAML frontmatter + explicit trigger phrases + guardrails + few-shot examples).
2. **Layer 2: Universal CLI Distribution Runner (`bin/agent-arsenal.js`):** Lightweight Node.js CLI (ESM) that detects project environment and injects skills into the respective agent configurations.

```text
agent-arsenal/
├── bin/
│   └── agent-arsenal.js          # CLI executable entrypoint
├── src/
│   ├── catalog.js                # In-memory skill index and metadata
│   ├── installer.js              # Multi-IDE target resolver (Cursor, Claude, Antigravity)
│   ├── auditor.js                # Local bloat and prompt auditor
│   └── ui.js                     # Terminal formatting, Boxen, Chalk
├── skills/
│   ├── anti-bloat.md
│   ├── diagram-craft.md
│   ├── security-shield.md
│   ├── apple-polish.md
│   ├── reverse-engineer.md
│   ├── git-surgeon.md
│   ├── sql-optimizer.md
│   ├── api-contract.md
│   ├── copy-surgeon.md
│   └── test-sniper.md
├── specs/                        # 6-Pillar Spec Blueprint
├── package.json
└── README.md
```

---

## Target Environment Auto-Detection
The installer automatically inspects the active working directory for:
1. `.cursorrules` or `.cursor/` -> Target: `.cursor/skills/` or appends to `.cursorrules`
2. `.claude/` -> Target: `.claude/skills/`
3. `.agent/` or Antigravity -> Target: `.agent/skills/`
4. Fallback -> Generates `.agent-skills/` directory with root symlinks / index

---

## Dependencies
- `commander` (>= 12.0.0): Robust argument parsing
- `chalk` (>= 5.0.0): Terminal styling & dark-mode visual hierarchy
- `boxen` (>= 7.0.0): Beautiful terminal cards and ASCII displays
- `ora` (>= 8.0.0): Smooth terminal spinners
- Zero external runtime networking required for offline execution.
