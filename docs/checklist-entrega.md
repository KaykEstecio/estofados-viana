# Checklist de Entrega

Atualizado em 13 de julho de 2026. Este documento registra o estado verificável
da primeira versão do site da Aconche Decor.

## Checklist técnico

- [x] Aplicação criada com React, TypeScript, Vite e TailwindCSS.
- [x] Estrutura dividida em componentes e dados centralizados em `src/data`.
- [x] Build de produção executado com sucesso.
- [x] TypeScript validado sem erros.
- [x] ESLint configurado com regras para TypeScript e React Hooks.
- [x] Testes automatizados configurados com Vitest.
- [x] Comando único de validação disponível: `npm run check`.
- [x] Repositório Git conectado ao GitHub na branch `main`.

## Checklist visual

- [x] Layout responsivo para celular, tablet e desktop.
- [x] Tema claro e escuro.
- [x] Identidade visual em tons de bege, caramelo e marrom.
- [x] Símbolo da marca e favicon inseridos.
- [x] Estados de foco visíveis para navegação por teclado.
- [ ] Substituir as imagens ilustrativas por fotografias reais autorizadas.
- [ ] Validar a identidade visual final e o logo com o cliente.

## Checklist de conteúdo

- [x] Nome, contatos, Instagram, e-mail e região de atendimento inseridos.
- [x] Textos comerciais focados em camas e cabeceiras personalizadas.
- [x] Fluxo de orçamento pelo WhatsApp explicado.
- [x] Conteúdo provisório identificado como ilustrativo quando necessário.
- [ ] Confirmar todos os serviços oferecidos pelo cliente.
- [ ] Inserir projetos reais no portfólio.
- [ ] Confirmar prazo, entrega, instalação e diferenciais comerciais.

## Checklist de segurança

- [x] Site estático, sem backend, login, banco de dados ou upload.
- [x] Headers de segurança configurados em `vercel.json`.
- [x] Links externos com `noopener noreferrer`.
- [x] Nenhuma credencial ou token armazenado no código.
- [x] `npm audit` executado sem vulnerabilidades conhecidas em 13/07/2026.
- [x] Política de Segurança de Conteúdo configurada.

## Checklist de SEO

- [x] Idioma `pt-BR`, título e descrição configurados.
- [x] Open Graph e Twitter Card configurados.
- [x] Hierarquia com um `h1` principal e títulos de seção.
- [x] Textos alternativos nas imagens.
- [x] Posicionamento local para a Grande São Paulo.
- [x] `canonical` e `og:url` configurados com o domínio de produção.
- [ ] Atualizar a imagem social quando houver fotografia real aprovada.

## Checklist de publicação e entrega

- [x] Configuração de build da Vercel registrada em `vercel.json`.
- [x] Pasta `dist` ignorada pelo Git e gerada pelo build.
- [x] Projeto vinculado à conta Vercel `kayk-s-projects2`.
- [x] Deploy de produção realizado em `https://aconche-decor.vercel.app`.
- [ ] Validar navegação, WhatsApp e aparência na URL pública.
- [ ] Configurar domínio próprio, se houver.
- [ ] Executar a aprovação final do cliente.

## Comandos de manutenção

```powershell
npm install
npm run dev
npm run check
npm run preview
```

## Pendências para entrega comercial

1. Fotografias reais e autorizadas dos produtos e projetos.
2. Confirmação dos serviços e informações comerciais ainda provisórias.
3. Aprovação do logo e da versão final pelo cliente.

## Melhorias futuras recomendadas

- Converter fotografias finais para WebP ou AVIF e revisar dimensões.
- Adicionar testes de navegação em navegador após o domínio estar publicado.
- Monitorar Core Web Vitals e indexação depois do lançamento.
- Revisar periodicamente dependências com `npm audit` e `npm outdated`.
