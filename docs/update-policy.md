# Política de atualização

## Archify

O bundle está fixado em `v2.16.0` e no commit `c826e6c3a7abad19c0f3cd1ca57207d54b1ad8de`. Atualizações são manuais.

Ao atualizar:

1. escolher uma release ou commit completo;
2. atualizar o bundle e `UPSTREAM.md`;
3. executar `node skills/archify/bin/archify.mjs doctor`;
4. validar um exemplo de cada um dos cinco tipos;
5. revisar o diff do bundle e os avisos de licença;
6. só então publicar uma nova versão da distribuição.

## Mermaid CLI

A versão é fixada em `runtime/mermaid/package.json` e `package-lock.json`. Atualizações exigem `npm ci`, render dos fixtures ER/Class e teste de erro.

## Hermes

Atualizar a distribuição pelo Git preserva credenciais, sessões e memória do perfil de destino. O repositório nunca deve carregar esses dados.
