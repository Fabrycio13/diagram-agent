---
name: archify-architecture
description: Create evidence-backed system architecture maps with Archify.
license: MIT
platforms: [windows, linux, macos]
metadata:
  hermes:
    tags: [architecture, archify, infrastructure, cloud, security]
---

# Archify Architecture

Use for components, services, frontend/backend boundaries, storage, cloud, network and deployment topology.

Load the bundled `archify` skill as the renderer contract. Start with approximately 8–12 primary nodes, one obvious main path and sparse labels.

For repository-backed architecture, inspect entrypoints, runtime boundaries, transports, storage and deployment configuration. Add Archify repository evidence only when the exact origin, full commit, file blob and line range are verifiable. The `--repo-root` option is architecture-only.

Create a fresh JSON candidate, then validate after every edit:

```bash
node skills/archify/bin/archify.mjs validate architecture <candidate.json> --quality showcase --repo-root <repo-root> --json
node skills/archify/bin/archify.mjs deliver architecture <candidate.json> <output.html> --quality showcase --repo-root <repo-root> --json
node skills/archify/bin/archify.mjs visual-check <output.html> --json
```

Do not claim that the map proves live deployment, traffic or runtime causality unless that was independently verified. Report source evidence, deterministic delivery, browser evidence and perceptual review separately.
