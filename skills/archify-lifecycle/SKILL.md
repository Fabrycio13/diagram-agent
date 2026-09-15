---
name: archify-lifecycle
description: Create validated state and retry lifecycle diagrams with Archify.
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: [lifecycle, state, retry, archify]
---

# Archify Lifecycle

Use for state/status transitions, waits, retries, cancellation and terminal outcomes.

Separate active, waiting, recoverable failure, permanent failure, cancellation and success. Every recoverable failure must have a real transition back to an active state. Do not use a card or note as a substitute for topology.

Create a fresh JSON candidate and validate after each edit:

```bash
node skills/archify/bin/archify.mjs validate lifecycle <candidate.json> --quality showcase --json
node skills/archify/bin/archify.mjs deliver lifecycle <candidate.json> <output.html> --quality showcase --json
node skills/archify/bin/archify.mjs visual-check <output.html> --json
```

If converting `stateDiagram`, retain states and transitions, but disclose unsupported notes or style constructs.
