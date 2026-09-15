---
name: archify-workflow
description: Create validated process and runbook diagrams with Archify.
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: [workflow, archify, cicd, runbook]
---

# Archify Workflow

Use for ordered processes, approvals, CI/CD, tool calls, runbooks, branches and exception paths.

For new workflow sources use schema v2. Keep the happy path clear, with side branches leaving the nearest main-path step. A retry or recovery must be a real transition, not only a label or card.

Create a fresh JSON candidate and validate after each edit:

```bash
node skills/archify/bin/archify.mjs validate workflow <candidate.json> --quality showcase --json
node skills/archify/bin/archify.mjs deliver workflow <candidate.json> <output.html> --quality showcase --json
node skills/archify/bin/archify.mjs visual-check <output.html> --json
```

Use only diagnosed geometry repairs. Do not hide overflow or compress the diagram until it becomes unreadable. Report unresolved branches and unknown behavior explicitly.
