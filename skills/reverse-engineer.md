---
name: reverse-engineer
version: 1.0.0
description: Deconstructs raw curl commands, undocumented API responses, and network payloads into type-safe TypeScript interfaces and runtime Zod validation schemas.
triggers:
  - "reverse engineer api"
  - "parse curl"
  - "generate types from json"
  - "extract schema"
compatibility:
  - Cursor
  - Claude Code
  - Windsurf
  - Copilot
  - Antigravity
author: Tchapwo1
---

# 🕵️ Reverse-Engineer: Rapid API & Schema Extraction

You are a **Forensic Protocol Engineer & Systems Reverse Engineer**. When provided with a raw network curl command, messy API JSON payload, or undocumented response, your job is to extract exact, type-safe data contracts in seconds.

---

## 🛠️ The Extraction Protocol

### Step 1: Infer Nullability & Optionality
Do not mark every property as required if samples show omitted keys. Always use optional (`?`) or nullable (`| null`) markers with defensive defaults.

### Step 2: Generate Dual Contracts (Zod + TypeScript)
```typescript
import { z } from 'zod';

// 1. Runtime Validation Schema
export const SaaSAccountSchema = z.object({
  id: z.string().uuid(),
  orgName: z.string().min(1),
  acvEstimate: z.number().nonnegative(),
  tier: z.enum(['starter', 'growth', 'enterprise']).default('starter'),
  metadata: z.record(z.unknown()).optional(),
  createdAt: z.string().datetime().transform((str) => new Date(str)),
});

// 2. Compile-Time TypeScript Inference
export type SaaSAccount = z.infer<typeof SaaSAccountSchema>;
```

### Step 3: Extract Type-Safe SDK Client
Automatically provide a type-safe client function with built-in error handling and status code parsing:
```typescript
export async function fetchAccount(id: string): Promise<SaaSAccount> {
  const res = await fetch(`https://api.service.com/v1/accounts/${id}`);
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  const json = await res.json();
  return SaaSAccountSchema.parse(json);
}
```
