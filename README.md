# Aconche Decor

Site institucional da Aconche Decor, fábrica de camas e cabeceiras personalizadas
com atendimento na Grande São Paulo.

## Documentação

- [Planejamento técnico inicial](docs/planejamento-tecnico-inicial.md)
- [Briefing e dados confirmados](docs/briefing-cliente.md)
- [Checklist de entrega](docs/checklist-entrega.md)
- [Revisão final de conteúdo](docs/revisao-final-conteudo.md)
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

O build também gera uma página HTML para cada rota pública, usando os metadados
de `src/data/routeMetadata.json`. Isso garante título, descrição, canonical e
Open Graph específicos mesmo para robôs que não executam JavaScript.

## Como atualizar o conteúdo

- Dados comerciais, WhatsApp, Instagram, região, horário e prazo:
  `src/data/siteConfig.ts`.
- Modelos e imagens do portfólio: `src/data/portfolio.ts`.
- Projetos realizados: `src/data/projects.ts`.
- Categorias e serviços: `src/data/categories.ts` e `src/data/services.ts`.
- Títulos, descrições e canonical das rotas: `src/data/routeMetadata.json`.
- Textos das seções: componentes em `src/components`.

Depois de alterar dados comerciais ou metadados, atualize os testes relacionados
e execute `npm run check`.

## Como trocar imagens

1. Coloque a fotografia otimizada em `public/images/real`.
2. Use um nome descritivo, sem espaços e preferencialmente em WebP ou JPEG.
3. Atualize o caminho e o texto alternativo no arquivo correspondente em
   `src/data` ou no componente que exibe a imagem.
4. Execute `npm run check` e confirme que não há caminhos quebrados.

Imagens antigas preservadas para consulta ficam em `design/archive-images` e não
são incluídas no deploy.

## Estrutura principal

- `src/components`: seções e elementos visuais.
- `src/data`: conteúdo comercial, portfólio e metadados.
- `src/pages`: composição das rotas.
- `src/utils`: geração dos links de WhatsApp.
- `public/images`: somente imagens utilizadas pelo site publicado.
- `scripts`: geração das páginas estáticas com SEO por rota.
- `docs`: briefing, planejamento e checklists de entrega.

## Escopo

Incluído: site institucional responsivo, portfólio, páginas de categorias, tema
claro/escuro, captação por WhatsApp, SEO básico por rota, Analytics da Vercel e
headers de segurança.

Não incluído: backend, login, banco de dados, painel administrativo, upload de
arquivos, pagamentos, formulário com armazenamento ou seção de antes e depois.

## Segurança e manutenção

- Nunca coloque senhas, tokens ou chaves em arquivos `VITE_*`; essas variáveis
  ficam públicas no navegador.
- Mantenha links externos com `rel="noopener noreferrer"`.
- Execute periodicamente `npm audit` e `npm run check`.
- Confirme autorização de uso antes de publicar novas fotografias.

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

O domínio oficial configurado no canonical, Open Graph, Twitter Card, robots e
sitemap é `https://www.aconchedecor.com.br/`. Se o domínio mudar, atualize
`index.html`, `src/data/routeMetadata.json`, `scripts/generate-route-pages.mjs`,
`public/robots.txt` e `public/sitemap.xml` em conjunto.

## Pendências comerciais

- Confirmação final dos serviços oferecidos além de camas e cabeceiras.
- Confirmação das condições de entrega e instalação.
- Aprovação dos diferenciais comerciais e das fotografias pelo cliente.
- Aprovação visual final antes da entrega definitiva.
