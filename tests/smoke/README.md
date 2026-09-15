# Diagram Arch — operação local

O repositório foi criado para a distribuição do perfil Hermes, não para armazenar os projetos analisados.

## Render Mermaid

A primeira instalação deve gerar `runtime/mermaid/package-lock.json` no computador de desenvolvimento e depois usar:

```bash
npm ci --prefix runtime/mermaid
node runtime/mermaid/render-mermaid.mjs examples/sample.erDiagram.mmd out/sample.erDiagram.svg
node runtime/mermaid/render-mermaid.mjs examples/sample.classDiagram.mmd out/sample.classDiagram.svg
```

O wrapper deve falhar quando a entrada não for `.mmd`, o formato não for suportado, o CLI não estiver instalado ou o arquivo final estiver vazio.

## Archify

```bash
node skills/archify/bin/archify.mjs doctor
```

O bundle Archify está fixado em `v2.16.0`; a origem e o commit estão em `UPSTREAM.md`.
