# Upstream e versões fixadas

## Archify

- Origem: `https://github.com/tt-a1i/archify`
- Release: `v2.16.0`
- Commit resolvido: `c826e6c3a7abad19c0f3cd1ca57207d54b1ad8de`
- Bundle usado: `archify.zip`, extraído para `skills/archify/`
- Licença upstream: MIT; o arquivo `skills/archify/LICENSE` acompanha o bundle.

O bundle não deve ser atualizado automaticamente. Uma atualização exige revisar a release/commit, atualizar este arquivo, executar `doctor`, os cinco smoke tests Archify e a matriz de aceitação.

## Mermaid CLI

- Pacote: `@mermaid-js/mermaid-cli`
- Versão inicial planejada: `11.15.0`
- Lockfile: `runtime/mermaid/package-lock.json`
- Configuração: `runtime/mermaid/mermaid-config.json`

O Mermaid CLI é usado como renderer separado para ER e Class. Não apresentar esses outputs como se fossem HTML interativo do Archify.
