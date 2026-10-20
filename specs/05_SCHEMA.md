# 🗄️ Pillar 5: Schema & Contract Specification — Agent Arsenal

## Skill Definition Schema (YAML + Markdown)
Every skill in `skills/*.md` must conform strictly to the Agent Skill Contract:

```yaml
---
name: string            # kebab-case identifier (e.g. anti-bloat)
version: string         # semantic version (e.g. 1.0.0)
description: string     # 1-2 sentence high-signal hook
triggers:               # Keywords that trigger agent activation
  - string
compatibility:          # Supported agent environments
  - "Cursor"
  - "Claude Code"
  - "Windsurf"
  - "Antigravity"
author: string          # "Tchapwo1"
---
```

### Markdown Body Structure:
1. `# [Skill Title]`
2. `## Directive & Non-Negotiable Rules` (Must/Must Not constraints)
3. `## Transformation Heuristics` (Before vs After examples)
4. `## Verification Checklist` (Self-auditing criteria before returning answer to user)
