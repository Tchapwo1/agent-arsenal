# 🔄 Pillar 3: Application & User Flow (APP FLOW) — Agent Arsenal

## Core User Journeys

```mermaid
flowchart TD
    Start["Developer terminal"] --> Command{"Command executed"}
    
    Command -->|"npx agent-arsenal list"| ListFlow["Display interactive skills catalog with descriptions"]
    Command -->|"npx agent-arsenal add <skill>"| InstallFlow["Detect project IDE (.cursor, .claude, etc.)"]
    Command -->|"npx agent-arsenal add --all"| BulkFlow["Install all 10 skills in one batch"]
    Command -->|"npx agent-arsenal audit"| AuditFlow["Scan existing codebase for agent bloat & unhandled risk"]

    InstallFlow --> CheckIDE{"IDE Detected?"}
    CheckIDE -->|"Cursor"| CopyCursor["Write to .cursor/skills/<name>.md"]
    CheckIDE -->|"Claude Code"| CopyClaude["Write to .claude/skills/<name>.md"]
    CheckIDE -->|"Default / Antigravity"| CopyDefault["Write to .agent/skills/<name>.md"]

    CopyCursor --> SuccessCard["Print Boxen confirmation + quick invocation prompt"]
    CopyClaude --> SuccessCard
    CopyDefault --> SuccessCard
    BulkFlow --> SuccessCard
```

---

## State Handling
- **Missing Directory:** Automatically creates target directories recursively (`mkdirSync({ recursive: true })`).
- **Existing File Conflict:** Checks checksum; if modified, alerts user with `--force` overwrite flag guidance.
- **Offline Reliability:** All skill templates are bundled within the package payload. No network drops or GitHub API rate-limiting failure modes.
