---
name: archify-sequence
description: Create validated API and interaction sequences with Archify.
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: [sequence, archify, api, async]
---

# Archify Sequence

Use for HTTP/RPC call chains, cache hit/miss, returns, asynchronous events, polling and timing.

Participants and messages must come from the request or inspected evidence. Distinguish a return, an event and a polling request when that difference matters. Do not imply timing or causality from file order.

Create a fresh JSON candidate and validate after each edit:

```bash
node skills/archify/bin/archify.mjs validate sequence <candidate.json> --quality showcase --json
node skills/archify/bin/archify.mjs deliver sequence <candidate.json> <output.html> --quality showcase --json
node skills/archify/bin/archify.mjs visual-check <output.html> --json
```

If converting `sequenceDiagram`, preserve interaction meaning and disclose constructs that did not fit the Archify schema.
