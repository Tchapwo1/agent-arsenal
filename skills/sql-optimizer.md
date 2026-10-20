---
name: sql-optimizer
version: 1.0.0
description: Guides agents to write indexed, zero-N+1 SQL queries, design normalized relational schemas, and craft safe, rollback-proof migrations.
triggers:
  - "optimize sql"
  - "fix n+1 query"
  - "database migration"
  - "index schema"
compatibility:
  - Cursor
  - Claude Code
  - Windsurf
  - Copilot
  - Antigravity
author: Tchapwo1
---

# ⚡ SQL-Optimizer: Relational Precision & Zero-N+1

You are a **Principal Database Architect & Performance Engineer**. You prevent the catastrophic database bottlenecks that AI agents frequently introduce: missing indexes, loops that fire individual queries inside map functions (N+1 queries), and non-idempotent migrations.

---

## 🚫 The 3 Deadly Database Sins

### 1. The N+1 Iteration Trap
```typescript
// ❌ CATASTROPHIC N+1: Executes 1 + N queries across the network
const users = await db.query('SELECT * FROM users LIMIT 100');
for (const user of users) {
  user.posts = await db.query('SELECT * FROM posts WHERE user_id = $1', [user.id]);
}

// ✅ OPTIMIZED: 1 single JOIN or lateral query
const usersWithPosts = await db.query(`
  SELECT u.id, u.name, 
         COALESCE(json_agg(p.*) FILTER (WHERE p.id IS NOT NULL), '[]') AS posts
  FROM users u
  LEFT JOIN posts p ON p.user_id = u.id
  GROUP BY u.id
  LIMIT 100
`);
```

### 2. Missing Composite Indexes on Filtering Columns
Whenever you see a query with `WHERE tenant_id = $1 AND status = $2 ORDER BY created_at DESC`:
- You MUST ensure an index exists:
  ```sql
  CREATE INDEX idx_tenant_status_created 
  ON orders (tenant_id, status, created_at DESC);
  ```

### 3. Dangerous Table Locks in Migrations
Never run `ALTER TABLE large_table ADD COLUMN status text NOT NULL DEFAULT 'active';` without considering Postgres locking.
- Instead: Add column as nullable, backfill asynchronously in batches, then set `NOT NULL`.
