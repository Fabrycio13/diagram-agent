---
name: archify-dataflow
description: Create validated data movement and lineage diagrams with Archify.
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: [dataflow, archify, lineage, etl, pii]
---

# Archify Data Flow

Use for sources, transformations, queues, stores, consumers, ETL/ELT, lineage and sensitivity boundaries.

Only draw a data edge when the source proves movement or a user explicitly describes it. File proximity is not data flow. Mark PII or sensitive data only when the classification is documented or explicitly provided.

Create a fresh JSON candidate and validate after each edit:

```bash
node skills/archify/bin/archify.mjs validate dataflow <candidate.json> --quality showcase --json
node skills/archify/bin/archify.mjs deliver dataflow <candidate.json> <output.html> --quality showcase --json
node skills/archify/bin/archify.mjs visual-check <output.html> --json
```

Split a large pipeline by question or bounded context instead of shrinking labels until unreadable.
