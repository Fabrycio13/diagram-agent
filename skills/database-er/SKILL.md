---
name: database-er
description: Create evidence-backed Mermaid entity relationship diagrams.
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: [database, er, mermaid, sql, schema]
---

# Database ER

Use for tables/entities, columns, PK/FK, cardinality, nullable and documented constraints.

## Evidence order

Prefer, in order:

1. migrations and DDL;
2. declarative schema files;
3. ORM models and relation definitions;
4. explicitly authorized read-only live introspection.

Label the origin as `declared`, `application`, `live` or `unknown`. A migration-derived ER is not proof of the current live database. Never invent a foreign key, unique constraint, cascade, nullable rule or cardinality.

Keep the diagram bounded to the tables relevant to the question. Omit sensitive values and row data. Write a versionable Mermaid `erDiagram` source and render it with the local wrapper:

```bash
node runtime/mermaid/render-mermaid.mjs <input.mmd> <output.svg>
```

Verify the output exists, has a valid SVG root and non-zero size. Preserve the `.mmd` beside the output. Report schema drift risks and missing constraints.
