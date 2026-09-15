# Instalação no computador pessoal

Esta distribuição deve ser instalada no Hermes do computador pessoal, não no Hermes do computador de trabalho.

## Pré-requisitos

- Git com acesso ao repositório privado;
- Hermes Agent para Windows;
- Node.js compatível com `skills/archify` (Archify exige Node >=18);
- npm;
- Chrome/Edge instalado ou Chrome Headless disponível para o Mermaid CLI.

## Instalar o perfil

```bash
hermes profile install https://github.com/Fabrycio13/diagram-agent --alias diagram-arch
```

Configure o provedor/modelo e as chaves no perfil local. Nunca copie `.env`, `auth.json`, sessões ou memória para o repositório.

## Instalar Mermaid

A partir da raiz da distribuição instalada:

```bash
npm ci --prefix runtime/mermaid
```

Se o navegador não for encontrado automaticamente, defina `DIAGRAM_ARCH_BROWSER` com o caminho local do Chrome ou Edge.

## Verificar

```bash
node skills/archify/bin/archify.mjs doctor
node runtime/mermaid/render-mermaid.mjs examples/sample.erDiagram.mmd out/sample.erDiagram.svg
node runtime/mermaid/render-mermaid.mjs examples/sample.classDiagram.mmd out/sample.classDiagram.svg
```

Abra o perfil:

```bash
diagram-arch chat
```
