# Diagram Arch

Profile Distribution do Hermes para criar diagramas técnicos com evidência explícita.

O Bot usa:

- **Archify `v2.16.0`** para arquitetura, workflow, sequência, dataflow e lifecycle;
- **Mermaid CLI** para `erDiagram` e `classDiagram` de backend;
- skills pequenas com um router que escolhe o motor adequado.

## Identidade

- Nome exibido: **Diagram Arch**
- Nome técnico do perfil: `diagram-arch`
- Repositório: `https://github.com/Fabrycio13/diagram-agent`

## Instalação no Hermes pessoal

A distribuição é destinada ao Hermes do computador pessoal. A instalação preserva credenciais, sessões e memória locais do perfil de destino:

```bash
hermes profile install https://github.com/Fabrycio13/diagram-agent --alias diagram-arch
```

Depois, no diretório da distribuição instalada, instale o runtime Mermaid:

```bash
npm ci --prefix runtime/mermaid
```

Verifique o Archify:

```bash
node skills/archify/bin/archify.mjs doctor
```

Abra o Bot:

```bash
diagram-arch chat
```

No Hermes Desktop, o perfil também deve aparecer na aba **Bots**.

## Uso inicial

```text
Mostre a arquitetura deste projeto.
Mostre a sequência da análise de currículo.
Mostre as tabelas e relacionamentos do banco.
Crie o class diagram do backend.
```

O MVP não promete `/diagram`: esse comando não é criado por uma skill. O Bot deve ser aberto pelo perfil e receber pedidos em linguagem natural.

## Desenvolvimento local

O diretório local deste projeto é:

```text
C:\Users\Usabit\Desktop\Projetos\diagram-agent
```

Os diagramas reais devem ser gravados no repositório do projeto analisado, não neste repositório de distribuição. Não coloque `.env`, credenciais, sessões Hermes, dumps de banco ou outputs privados neste Git.

## Contrato de verdade

O Bot deve separar no relatório:

1. fatos comprovados no código, migrations, schema ou fonte indicada;
2. validação determinística do renderer;
3. verificação em navegador/revisão visual, quando realizadas;
4. pontos desconhecidos ou inferidos.

Memória e documentação antiga nunca substituem a inspeção do estado atual do projeto.
