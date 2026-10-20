---
name: anti-bloat
version: 1.0.0
description: Forces AI coding agents to write 60% less code, eliminate unnecessary wrappers, avoid speculative abstractions, and produce surgical diffs.
triggers:
  - "anti-bloat"
  - "clean code"
  - "refactor minimal"
  - "cut boilerplate"
compatibility:
  - Cursor
  - Claude Code
  - Windsurf
  - Copilot
  - Antigravity
author: Tchapwo1
---

# ✂️ Anti-Bloat: The Minimalist Agent Directive

You are operating under **Strict Anti-Bloat Directives**. Your primary mandate is to achieve the user's objective using the **minimum possible lines of code, zero speculative abstractions, and zero new runtime dependencies** unless explicitly requested.

---

## 🚫 Non-Negotiable Prohibitions

1. **NO Speculative Factory Patterns:** Do not create `AbstractFactoryManagerProvider` classes when a simple function or dictionary lookup accomplishes the task.
2. **NO Redundant Wrapper Functions:** Do not write helper functions that simply call a native language method once (e.g., `const isEmpty = (arr) => arr.length === 0;`).
3. **NO Unsolicited Package Installs:** Never introduce `lodash`, `moment`, `axios`, or random npm/pip packages if the standard library or existing project dependencies already suffice.
4. **NO Full-File Rewrites for Trivial Edits:** Never replace a 300-line file to change 3 lines. Provide surgical, localized diffs.
5. **NO Trivial JSDoc / Comments That Echo Code:** Avoid comments like `// Sets the user name` above `setUserName(name)`.

---

## ⚡ Transformation Rules

### Example 1: Object Transformation
```typescript
// ❌ BLOATED AGENT CODE (35 lines, class boilerplate)
class UserDataTransformer {
  private rawUser: any;
  constructor(rawUser: any) { this.rawUser = rawUser; }
  public getNormalizedUser(): NormalizedUser {
    return {
      id: this.extractId(),
      displayName: this.formatName(),
      isActive: this.checkStatus()
    };
  }
  private extractId() { return String(this.rawUser.id); }
  private formatName() { return `${this.rawUser.first} ${this.rawUser.last}`.trim(); }
  private checkStatus() { return Boolean(this.rawUser.active); }
}

// ✅ ANTI-BLOAT SURGICAL CODE (5 lines, zero overhead)
export const toNormalizedUser = (u: RawUser): NormalizedUser => ({
  id: String(u.id),
  displayName: `${u.first} ${u.last}`.trim(),
  isActive: Boolean(u.active),
});
```

### Example 2: API Request
```typescript
// ❌ BLOATED: Installing axios when fetch is global
import axios from 'axios';
export async function getRates() {
  const res = await axios.get('/api/rates');
  return res.data;
}

// ✅ ANTI-BLOAT: Native fetch, 3 lines
export const getRates = () => 
  fetch('/api/rates').then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });
```

---

## 📋 Self-Check Gate (Before Outputting Code)
Before you return any code to the user, verify:
- [ ] Could this be done in 50% fewer lines without losing clarity?
- [ ] Did I introduce any external dependency that wasn't strictly necessary?
- [ ] Did I leave existing unrelated code and comments completely untouched?
- [ ] Is every new function actually called, or did I pre-emptively build "future proofing" that wasn't asked for?
