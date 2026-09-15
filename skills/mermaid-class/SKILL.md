---
name: mermaid-class
description: Create evidence-backed Mermaid backend class diagrams.
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: [backend, classes, interfaces, mermaid]
---

# Mermaid Class

Use for backend classes, interfaces, modules and their relationships.

Read source code, type definitions, imports and explicit interface implementations. Distinguish inheritance, implementation, composition, aggregation and dependency only when the code supports the distinction. Do not confuse domain classes with database tables or module imports with runtime calls.

Keep the diagram focused on one module or bounded context. Generate a versionable `classDiagram` source and render it with:

```bash
node runtime/mermaid/render-mermaid.mjs <input.mmd> <output.svg>
```

Use the explicit Mermaid security configuration, no arbitrary HTML labels or clicks. Verify the SVG root, non-zero output and visible labels. Report omitted classes and relationships that could not be proven.
