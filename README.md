# Aconche Decor

Site institucional da Aconche Decor, fábrica de camas e cabeceiras personalizadas
com atendimento na Grande São Paulo.

## Documentação

- [Planejamento técnico inicial](docs/planejamento-tecnico-inicial.md)
- Skills do projeto: [`.codex/skills`](.codex/skills)

## Stack oficial

- React
- TypeScript
- Vite
- TailwindCSS
- Vercel

## Regras principais

- Não criar backend.
- Não criar login.
- Não criar banco de dados.
- Não criar upload de arquivos.
- Não criar seção de antes e depois.
- Usar WhatsApp como principal canal de contato.
- Trabalhar fase por fase, seguindo o planejamento oficial.

## Ordem oficial das fases

1. Base Técnica
2. Dados Base do Site
3. Estrutura Visual Básica
4. Refinamento Visual Premium
5. Conversão para WhatsApp
6. Textos Comerciais
7. SEO Local
8. Segurança
9. Inserção dos Dados Reais
10. Imagens e Performance
11. Deploy
12. Documentação e Entrega

Consulte o planejamento completo antes de executar qualquer fase.

## Como rodar localmente

Instale as dependências:

```powershell
npm install
```

Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

## Como validar o build

Execute a validação completa (lint, testes e build):

```powershell
npm run check
```

Ou execute cada etapa separadamente:

```powershell
npm run lint
npm run test
npm run build
```

Para revisar a versão de produção localmente:

```powershell
npm run preview
```

## Publicação na Vercel

O projeto está configurado como aplicação Vite, com build em `dist` e headers
de segurança definidos em `vercel.json`.

1. Envie todas as alterações para o repositório GitHub.
2. Acesse o painel da Vercel e escolha **Add New > Project**.
3. Importe o repositório `KaykEstecio/estofados-viana`.
4. Confirme o framework **Vite**.
5. Confirme o comando `npm run build` e a pasta de saída `dist`.
6. Clique em **Deploy**.

Cada atualização enviada para a branch principal gerará um novo deploy de
produção. Outras branches e pull requests poderão gerar previews.

Depois da publicação, substitua as URLs relativas de canonical e Open Graph em
`index.html` pelo domínio definitivo da Vercel ou pelo domínio próprio.
