# Planejamento Técnico Inicial — Site de Camas e Cabeceiras Personalizadas

## 1. Visão Geral do Projeto

O projeto será um site institucional em formato de portfólio comercial para uma empresa especializada em camas e cabeceiras personalizadas.

O site terá como objetivo apresentar a empresa de forma profissional, destacar seus projetos finalizados, explicar os serviços oferecidos e direcionar potenciais clientes para solicitar orçamento pelo WhatsApp.

A primeira versão será um site estático, sem backend, sem login, sem banco de dados, sem upload de arquivos e sem painel administrativo. Essa decisão reduz complexidade, melhora segurança, facilita manutenção e mantém o projeto alinhado ao objetivo comercial principal: captar clientes.

---

## 2. Objetivo Principal

Criar um site profissional para:

* Apresentar a empresa como especialista em camas e cabeceiras personalizadas.
* Mostrar projetos finalizados em formato de portfólio.
* Divulgar camas sob medida, cabeceiras estofadas, recamiers, puffs e estofados personalizados.
* Explicar como funciona o processo de orçamento.
* Direcionar clientes para contato pelo WhatsApp.
* Transmitir imagem premium, confiável, artesanal e profissional.
* Funcionar bem em celular, tablet e computador.
* Ter boa performance, SEO básico e segurança adequada.
* Ser fácil de manter e atualizar.

---

## 3. Posicionamento Comercial

### 3.1 Mensagem Central

A comunicação principal do site será:

**Especialistas em camas e cabeceiras personalizadas**

Essa mensagem deve aparecer claramente na primeira dobra do site.

O site não deve parecer uma estofaria genérica. O foco principal será posicionar a empresa como especialista em projetos sob medida para quartos, principalmente camas, cabeceiras e móveis estofados personalizados.

### 3.2 Percepção Desejada

Ao entrar no site, o visitante deve entender rapidamente que:

* A empresa faz camas e cabeceiras sob medida.
* Os projetos são personalizados.
* O acabamento é profissional.
* Existem trabalhos finalizados para visualizar.
* O contato para orçamento é simples e direto pelo WhatsApp.
* A empresa trabalha com foco em conforto, design e personalização.

---

## 4. Stack Oficial

A stack oficial do projeto será:

* Frontend: React
* Linguagem: TypeScript
* Build Tool: Vite
* Estilização: TailwindCSS
* Hospedagem: Vercel
* Controle de versão: Git + GitHub
* Canal comercial principal: WhatsApp
* SEO: title, meta description, Open Graph, headings semânticos e alt text
* Segurança: site estático com headers básicos
* Documentação: README e arquivos em `docs/`

---

## 5. Escopo da Primeira Versão

A primeira versão do site deve incluir:

* Site responsivo.
* Header com navegação.
* Hero principal.
* Seção de categorias de projetos.
* Seção de portfólio com projetos finalizados.
* Seção sobre projetos sob medida.
* Seção de serviços.
* Seção explicando como funciona o orçamento.
* Seção sobre a empresa/profissional.
* Seção de contato.
* Botões de WhatsApp.
* Botão flutuante de WhatsApp.
* Footer.
* SEO básico.
* Headers básicos de segurança.
* README de manutenção.
* Deploy na Vercel.

---

## 6. Fora do Escopo da Primeira Versão

Não incluir na primeira versão:

* Backend.
* Login.
* Banco de dados.
* Área administrativa.
* Upload de imagens.
* Upload de arquivos pelo cliente.
* Formulário complexo.
* Pagamento online.
* Orçamento automático.
* Chat interno.
* Seção de antes e depois.
* Cadastro de clientes.
* Painel para o cliente alterar conteúdo.
* Sistema de agendamento.
* Integração com CMS.
* Carrinho de compras.

Esses recursos podem ser considerados futuramente, mas não devem entrar no MVP.

---

## 7. Regras Permanentes do Projeto

Essas regras devem ser respeitadas em todas as fases:

* Não criar backend.
* Não criar login.
* Não criar banco de dados.
* Não criar upload de arquivos.
* Não criar seção de antes e depois.
* Não criar painel administrativo.
* Não adicionar bibliotecas pesadas sem necessidade.
* Não inventar dados do cliente.
* Não copiar layout, textos ou imagens de sites de referência.
* Manter foco em camas e cabeceiras personalizadas.
* Usar WhatsApp como canal principal de contato.
* Priorizar segurança, performance, responsividade e manutenção.
* Trabalhar fase por fase.
* Não avançar para a próxima fase sem validação.

---

## 8. Estrutura Oficial Planejada

```txt
camas-cabeceiras-site/
  public/
    images/
      hero/
      portfolio/
      categories/
      logo/

  src/
    components/
      Header.tsx
      Hero.tsx
      Categories.tsx
      Portfolio.tsx
      CustomProjects.tsx
      Services.tsx
      Process.tsx
      About.tsx
      Contact.tsx
      Footer.tsx
      WhatsAppButton.tsx

    data/
      siteConfig.ts
      categories.ts
      portfolio.ts
      services.ts

    utils/
      whatsapp.ts

    App.tsx
    main.tsx
    index.css

  docs/
    planejamento-tecnico-inicial.md
    checklist-entrega.md
    briefing-cliente.md

  vercel.json
  README.md
  package.json
```

---

## 9. Arquitetura do Projeto

### 9.1 Frontend

O frontend será feito com React e TypeScript.

A aplicação será dividida em componentes independentes, cada componente representando uma seção do site.

### 9.2 Dados

Os dados do site devem ficar centralizados em arquivos dentro de `src/data`.

Arquivos planejados:

* `siteConfig.ts`
* `categories.ts`
* `portfolio.ts`
* `services.ts`

Isso evita textos espalhados pelos componentes e facilita manutenção.

### 9.3 WhatsApp

O número e a mensagem padrão do WhatsApp devem ficar em `siteConfig.ts`.

A função responsável por gerar o link do WhatsApp deve ficar em:

```txt
src/utils/whatsapp.ts
```

### 9.4 Imagens

As imagens devem ficar organizadas em:

```txt
public/images/hero/
public/images/portfolio/
public/images/categories/
public/images/logo/
```

As imagens devem ter nomes profissionais e descritivos.

Exemplos corretos:

```txt
cama-personalizada-bege.webp
cabeceira-estofada-sob-medida.webp
recamier-quarto-casal.webp
puff-personalizado.webp
```

Evitar nomes como:

```txt
IMG_1234.jpg
foto1.png
whatsapp-image.jpeg
```

---

## 10. Conteúdo Planejado do Site

### 10.1 Header

Menu recomendado:

* Início
* Projetos
* Camas
* Cabeceiras
* Sob Medida
* Sobre
* Contato

Botão destacado:

**Solicitar orçamento**

O botão deve abrir o WhatsApp.

---

### 10.2 Hero Principal

Título:

**Especialistas em camas e cabeceiras personalizadas**

Subtítulo:

**Criamos camas, cabeceiras e estofados sob medida para transformar quartos em ambientes mais confortáveis, elegantes e personalizados.**

Botões:

* Ver projetos
* Solicitar orçamento

Imagem recomendada:

* Foto de uma cama personalizada.
* Foto de uma cabeceira estofada.
* Foto de um quarto finalizado.
* Foto real de um projeto da empresa.

---

### 10.3 Categorias de Projetos

Categorias principais:

* Camas Personalizadas
* Cabeceiras Personalizadas
* Cabeceiras Estofadas
* Camas Box Sob Medida
* Recamiers
* Puffs
* Estofados Sob Medida

Cada categoria deve conter:

* Título.
* Descrição curta.
* Imagem.
* Chamada para orçamento.

Exemplo:

**Cabeceiras Personalizadas**

Cabeceiras sob medida em diferentes modelos, tecidos, alturas e acabamentos para valorizar o ambiente.

---

### 10.4 Portfólio

O portfólio deve mostrar apenas projetos finalizados.

Não deve ter seção de antes e depois.

Cada projeto deve conter:

* Foto do projeto.
* Título.
* Categoria.
* Descrição.
* Destaque do acabamento ou personalização.
* Botão para orçamento.

Exemplo:

Título:

**Cabeceira estofada personalizada**

Categoria:

**Cabeceiras Personalizadas**

Descrição:

Cabeceira sob medida com acabamento estofado e tecido em tom neutro.

Destaque:

Projeto desenvolvido para valorizar o quarto com conforto, elegância e acabamento profissional.

---

### 10.5 Projetos Sob Medida

Título:

**Projetos sob medida para o seu quarto**

Texto base:

Cada peça é desenvolvida considerando o espaço disponível, o estilo do ambiente, as medidas desejadas, a escolha de tecidos e os detalhes de acabamento. O objetivo é criar camas, cabeceiras e estofados que combinem conforto, beleza e funcionalidade.

Destaques:

* Medidas personalizadas.
* Escolha de tecidos.
* Acabamento profissional.
* Design para quartos.
* Conforto e elegância.
* Atendimento pelo WhatsApp.

---

### 10.6 Serviços

Serviços planejados:

* Camas Personalizadas
* Cabeceiras Personalizadas
* Cabeceiras Estofadas
* Camas Box Sob Medida
* Recamiers
* Puffs
* Estofados Sob Medida

Serviços adicionais só devem entrar se o cliente confirmar.

Não inventar:

* Garantia.
* Prazo de entrega.
* Materiais específicos.
* Cidade.
* Anos de experiência.
* Tipos de tecido.
* Nomes de clientes.

---

### 10.7 Como Funciona o Orçamento

Etapas:

1. O cliente envia uma referência ou ideia pelo WhatsApp.
2. A equipe entende o modelo desejado.
3. São avaliadas medidas, tecido, acabamento e detalhes do projeto.
4. O orçamento é enviado com as informações combinadas.
5. Após aprovação, o projeto é produzido sob medida.
6. A entrega ou instalação é combinada conforme o atendimento.

Essa seção serve para reduzir dúvidas e aumentar confiança.

---

### 10.8 Sobre a Empresa

Texto base:

Somos especializados no desenvolvimento de camas, cabeceiras e estofados personalizados, criando peças sob medida para clientes que buscam conforto, qualidade e acabamento diferenciado.

Cada projeto é pensado de acordo com o ambiente, estilo e necessidade do cliente, com atenção à escolha dos materiais, medidas, tecidos e detalhes de acabamento.

Informações como anos de experiência, região, garantia e entrega só entram depois de confirmação com o cliente.

---

### 10.9 Contato

O contato principal será pelo WhatsApp.

Mensagem padrão:

**Olá, vi o portfólio de camas e cabeceiras personalizadas e gostaria de solicitar um orçamento. Posso enviar uma referência do que estou procurando?**

Informações exibidas:

* WhatsApp.
* Instagram.
* Região de atendimento.
* Horário de atendimento.

---

## 11. Arquivos de Dados Planejados

### 11.1 `siteConfig.ts`

```ts
export const siteConfig = {
  businessName: "Nome da Empresa",
  whatsappNumber: "5511999999999",
  instagramUrl: "https://instagram.com/exemplo",
  serviceRegion: "[Cidade/Região]",
  openingHours: "Segunda a sábado, das 8h às 18h",
  whatsappMessage:
    "Olá, vi o portfólio de camas e cabeceiras personalizadas e gostaria de solicitar um orçamento. Posso enviar uma referência do que estou procurando?",
};
```

---

### 11.2 `categories.ts`

```ts
export const categories = [
  {
    title: "Camas Personalizadas",
    description:
      "Camas sob medida desenvolvidas conforme o ambiente, estilo e necessidade do cliente.",
    image: "/images/categories/camas-personalizadas.webp",
  },
  {
    title: "Cabeceiras Personalizadas",
    description:
      "Cabeceiras estofadas em diferentes modelos, tecidos, alturas e acabamentos.",
    image: "/images/categories/cabeceiras-personalizadas.webp",
  },
  {
    title: "Cabeceiras Estofadas",
    description:
      "Cabeceiras com acabamento estofado para valorizar o quarto com conforto e personalidade.",
    image: "/images/categories/cabeceiras-estofadas.webp",
  },
  {
    title: "Camas Box Sob Medida",
    description:
      "Camas box personalizadas conforme o espaço, modelo e necessidade do cliente.",
    image: "/images/categories/camas-box-sob-medida.webp",
  },
  {
    title: "Recamiers",
    description:
      "Peças estofadas para complementar quartos com conforto, elegância e funcionalidade.",
    image: "/images/categories/recamiers.webp",
  },
  {
    title: "Puffs",
    description:
      "Puffs personalizados para quartos, salas e ambientes sob medida.",
    image: "/images/categories/puffs.webp",
  },
  {
    title: "Estofados Sob Medida",
    description:
      "Peças estofadas personalizadas para compor ambientes com conforto e acabamento.",
    image: "/images/categories/estofados-sob-medida.webp",
  },
];
```

---

### 11.3 `portfolio.ts`

```ts
export const portfolioItems = [
  {
    id: "cabeceira-estofada-personalizada",
    title: "Cabeceira estofada personalizada",
    category: "Cabeceiras Personalizadas",
    description:
      "Cabeceira sob medida com acabamento estofado, tecido em tom neutro e visual elegante para compor o ambiente.",
    highlight:
      "Projeto desenvolvido com atenção às medidas, tecido e acabamento final.",
    image: "/images/portfolio/cabeceira-estofada-personalizada.webp",
  },
  {
    id: "cama-estofada-sob-medida",
    title: "Cama estofada sob medida",
    category: "Camas Personalizadas",
    description:
      "Cama personalizada desenvolvida conforme o espaço, estilo e necessidade do cliente.",
    highlight:
      "Peça sob medida para entregar conforto, sofisticação e melhor aproveitamento do quarto.",
    image: "/images/portfolio/cama-estofada-sob-medida.webp",
  },
];
```

---

### 11.4 `services.ts`

```ts
export const services = [
  {
    title: "Camas Personalizadas",
    description:
      "Projetos sob medida para camas estofadas, considerando conforto, estilo, medidas e acabamento.",
  },
  {
    title: "Cabeceiras Personalizadas",
    description:
      "Cabeceiras desenvolvidas conforme o ambiente, com diferentes modelos, tecidos, alturas e detalhes.",
  },
  {
    title: "Cabeceiras Estofadas",
    description:
      "Cabeceiras com acabamento estofado para valorizar o quarto com conforto e personalidade.",
  },
  {
    title: "Camas Box Sob Medida",
    description:
      "Camas box personalizadas de acordo com o espaço, modelo e necessidade do cliente.",
  },
  {
    title: "Recamiers",
    description:
      "Recamiers estofados para complementar quartos com elegância e funcionalidade.",
  },
  {
    title: "Puffs",
    description:
      "Puffs personalizados para compor ambientes residenciais ou comerciais.",
  },
  {
    title: "Estofados Sob Medida",
    description:
      "Desenvolvimento de peças estofadas personalizadas conforme a necessidade do projeto.",
  },
];
```

---

### 11.5 `whatsapp.ts`

```ts
import { siteConfig } from "../data/siteConfig";

export function getWhatsAppLink(message = siteConfig.whatsappMessage) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
```

---

## 12. Design e Identidade Visual

### 12.1 Direção Visual

O site deve transmitir:

* Elegância.
* Conforto.
* Personalização.
* Sofisticação.
* Profissionalismo.
* Acabamento artesanal.
* Confiança.
* Sensação de móvel sob medida.

### 12.2 Paleta Recomendada

* Fundo principal: `#FAF7F2`
* Texto principal: `#2B2118`
* Marrom escuro: `#4A3328`
* Caramelo: `#B9824A`
* Bege: `#E8DED2`
* Cinza claro: `#F2F0ED`
* Branco suave: `#FFFDF9`

### 12.3 Estilo

Usar:

* Fotos grandes.
* Cards elegantes.
* Botões bem visíveis.
* Espaçamentos generosos.
* Poucas animações.
* Tipografia limpa.
* Layout sofisticado.
* Visual focado em quarto, conforto e acabamento.

Evitar:

* Visual muito tecnológico.
* Excesso de animação.
* Cores muito fortes.
* Interface genérica de IA.
* Layout poluído.
* Muitos efeitos sem função comercial.

---

## 13. Segurança Planejada

### 13.1 Estratégia de Segurança

A segurança será baseada em simplicidade e baixa superfície de ataque.

O site não terá:

* Backend.
* Login.
* Banco de dados.
* Upload de arquivos.
* Armazenamento de dados pessoais.
* Área administrativa.

### 13.2 Medidas Obrigatórias

* HTTPS ativo pela Vercel.
* Headers básicos de segurança.
* Nenhuma credencial no código.
* Nenhum token exposto.
* Links externos com `rel="noopener noreferrer"`.
* Não usar `dangerouslySetInnerHTML`.
* Evitar dependências desnecessárias.
* Rodar `npm audit` antes da entrega.
* Rodar `npm run build` antes do deploy.
* Rodar `npm run type-check`, se existir.

### 13.3 `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

---

## 14. SEO Planejado

### 14.1 Objetivo

Preparar o site para buscas locais relacionadas a camas, cabeceiras e estofados personalizados.

### 14.2 Palavras-chave Principais

* camas personalizadas
* cabeceiras personalizadas
* cabeceiras estofadas
* camas sob medida
* estofados personalizados
* recamiers
* puffs personalizados
* móveis estofados sob medida
* camas personalizadas em [cidade]
* cabeceiras personalizadas em [cidade]

### 14.3 Title Sugerido

```txt
Camas e Cabeceiras Personalizadas em [Cidade] | [Nome da Empresa]
```

### 14.4 Meta Description Sugerida

```txt
Especialistas em camas, cabeceiras e estofados personalizados em [Cidade]. Projetos sob medida com acabamento profissional. Solicite orçamento pelo WhatsApp.
```

### 14.5 Headings

H1:

```txt
Especialistas em camas e cabeceiras personalizadas
```

H2s sugeridos:

* Projetos personalizados para o seu quarto.
* Conheça nossos projetos.
* Camas, cabeceiras e estofados sob medida.
* Como funciona o orçamento.
* Solicite seu orçamento.

---

## 15. Performance Planejada

### 15.1 Cuidados Obrigatórios

* Usar imagens otimizadas.
* Preferir formato WebP.
* Usar `loading="lazy"` em imagens de portfólio.
* Evitar bibliotecas pesadas.
* Manter código componentizado.
* Garantir responsividade mobile.
* Rodar `npm run build` antes do deploy.
* Evitar imagens muito grandes.
* Evitar animações que prejudiquem performance.

### 15.2 Nomeação das Imagens

Usar nomes descritivos:

```txt
cama-personalizada-bege.webp
cabeceira-estofada-sob-medida.webp
recamier-quarto-casal.webp
puff-personalizado.webp
```

---

## 16. Skills do Codex

As skills criadas para o projeto são:

1. Premium Furniture UI
2. Portfolio Commercial Copy
3. WhatsApp Conversion
4. Static Site Security
5. Local SEO Furniture
6. Client Delivery

### 16.1 Uso das Skills por Fase

Fase 1 — Base Técnica
Sem skill principal. Apenas estrutura e configuração.

Fase 2 — Dados Base
Pode usar Portfolio Commercial Copy para textos temporários.

Fase 3 — Estrutura Visual Básica
Sem refinamento avançado.

Fase 4 — Refinamento Visual Premium
Usar Premium Furniture UI.

Fase 5 — Conversão para WhatsApp
Usar WhatsApp Conversion.

Fase 6 — Textos Comerciais
Usar Portfolio Commercial Copy.

Fase 7 — SEO Local
Usar Local SEO Furniture.

Fase 8 — Segurança
Usar Static Site Security.

Fase 12 — Documentação e Entrega
Usar Client Delivery.

---

# 17. Roadmap Técnico por Etapas

## Fase 1 — Base Técnica

### Objetivo

Criar a estrutura inicial do projeto, configurar a stack oficial e garantir que o projeto rode localmente.

### Entregas

* Projeto React + TypeScript + Vite criado.
* TailwindCSS configurado.
* Estrutura de pastas criada.
* App.tsx temporário.
* README inicial.
* `vercel.json` com headers básicos.
* `npm run dev` funcionando.
* `npm run build` funcionando.

### Não fazer nesta fase

* Não criar layout completo.
* Não criar Hero.
* Não criar Portfólio.
* Não criar Serviços.
* Não criar backend.
* Não criar login.
* Não criar banco.
* Não criar upload.
* Não criar antes e depois.

### Critério de conclusão

* O projeto abre localmente.
* O build roda sem erro.
* A estrutura de pastas está organizada.
* Nenhuma funcionalidade fora do escopo foi criada.

### Comandos de validação

```bash
npm install
npm run dev
npm run build
```

---

## Fase 2 — Dados Base do Site

### Objetivo

Criar os arquivos de dados que alimentarão o site.

### Entregas

* `src/data/siteConfig.ts`
* `src/data/categories.ts`
* `src/data/portfolio.ts`
* `src/data/services.ts`
* `src/utils/whatsapp.ts`

### Critério de conclusão

* Dados centralizados em arquivos próprios.
* WhatsApp configurável em `siteConfig.ts`.
* Portfólio sem `beforeImage` e `afterImage`.
* Categorias e serviços alinhados ao posicionamento.
* Nenhum dado real inventado.

---

## Fase 3 — Estrutura Visual Básica

### Objetivo

Criar todos os componentes principais do site em versão funcional.

### Entregas

* `Header.tsx`
* `Hero.tsx`
* `Categories.tsx`
* `Portfolio.tsx`
* `CustomProjects.tsx`
* `Services.tsx`
* `Process.tsx`
* `About.tsx`
* `Contact.tsx`
* `Footer.tsx`
* `WhatsAppButton.tsx`

### Ordem no `App.tsx`

1. Header
2. Hero
3. Categories
4. Portfolio
5. CustomProjects
6. Services
7. Process
8. About
9. Contact
10. Footer
11. WhatsAppButton

### Critério de conclusão

* Todas as seções aparecem na página.
* O site está navegável.
* O botão de WhatsApp funciona.
* Não existe seção de antes e depois.
* Não existe backend, login, banco ou upload.

---

## Fase 4 — Refinamento Visual Premium

### Objetivo

Melhorar a interface para transmitir imagem premium, artesanal e profissional.

### Skill recomendada

Premium Furniture UI

### Entregas

* Hero visualmente mais forte.
* Cards mais elegantes.
* Melhor hierarquia visual.
* Paleta refinada.
* Espaçamentos ajustados.
* Responsividade mobile melhorada.
* Seções com aparência menos genérica.
* Botões mais consistentes.
* Footer mais profissional.

### Critério de conclusão

* O site parece premium.
* O visual combina com camas e cabeceiras personalizadas.
* O layout não parece template genérico de IA.
* O mobile está bem resolvido.
* O visual não está exagerado.

---

## Fase 5 — Conversão para WhatsApp

### Objetivo

Garantir que o site conduza o visitante para solicitar orçamento pelo WhatsApp.

### Skill recomendada

WhatsApp Conversion

### Entregas

* CTAs revisados.
* Botões bem posicionados.
* Mensagem de WhatsApp correta.
* Fluxo de orçamento claro.
* Seção de contato mais objetiva.
* Botão flutuante funcional.
* Textos de chamada mais diretos.

### Critério de conclusão

* Todos os botões de orçamento abrem o WhatsApp.
* A mensagem pronta está correta.
* O visitante entende rapidamente como solicitar orçamento.
* Não há distrações desnecessárias.
* A conversão no mobile está priorizada.

---

## Fase 6 — Textos Comerciais

### Objetivo

Melhorar os textos do site para parecerem profissionais e alinhados ao posicionamento.

### Skill recomendada

Portfolio Commercial Copy

### Entregas

* Textos do Hero revisados.
* Textos das categorias revisados.
* Textos do portfólio revisados.
* Textos dos serviços revisados.
* Texto do Sobre revisado.
* CTAs revisados.
* Texto de contato revisado.
* Textos sem promessas falsas.

### Critério de conclusão

* Textos claros e comerciais.
* Sem promessas falsas.
* Sem dados inventados.
* Sem exageros genéricos.
* Foco mantido em camas e cabeceiras personalizadas.
* Linguagem profissional e objetiva.

---

## Fase 7 — SEO Local

### Objetivo

Preparar o site para mecanismos de busca, principalmente em buscas locais.

### Skill recomendada

Local SEO Furniture

### Entregas

* Title configurado.
* Meta description configurada.
* Open Graph básico.
* H1 único.
* H2s bem estruturados.
* Alt text nas imagens.
* Textos com termos relevantes de forma natural.
* SEO usando placeholders quando cidade ou nome ainda não forem confirmados.

### Critério de conclusão

* SEO básico implementado.
* Cidade/região usada apenas se confirmada.
* Não há keyword stuffing.
* Headings fazem sentido.
* Imagens possuem alt text coerente.

---

## Fase 8 — Segurança

### Objetivo

Revisar o projeto antes da publicação.

### Skill recomendada

Static Site Security

### Entregas

* Revisão de credenciais.
* Revisão de links externos.
* Revisão de dependências.
* Revisão do `vercel.json`.
* Execução de `npm audit`.
* Execução de `npm run build`.
* Execução de `npm run type-check`, se existir.
* Remoção de dependências desnecessárias, se houver.

### Critério de conclusão

* Nenhuma credencial exposta.
* Nenhum backend indevido.
* Nenhum login indevido.
* Nenhum banco indevido.
* Nenhum upload indevido.
* Build sem erro.
* Headers de segurança configurados.
* Links externos seguros.

---

## Fase 9 — Inserção dos Dados Reais

### Objetivo

Substituir dados temporários pelas informações reais do cliente.

### Entregas

* Nome real da empresa.
* WhatsApp real.
* Instagram real.
* Região de atendimento.
* Horário de atendimento.
* Serviços reais.
* Fotos reais.
* Portfólio real.
* Diferenciais reais.
* Informações sobre entrega ou instalação, se houver.

### Critério de conclusão

* Não há placeholder visível.
* Nenhuma informação foi inventada.
* Fotos reais aparecem corretamente.
* WhatsApp está correto.
* Cliente aprovou os dados.
* Serviços correspondem ao que a empresa realmente oferece.

---

## Fase 10 — Imagens e Performance

### Objetivo

Organizar e otimizar as imagens usadas no site.

### Entregas

* Imagens organizadas por pasta.
* Nomes descritivos.
* Imagens otimizadas.
* Alt text adequado.
* Lazy loading aplicado quando necessário.
* Caminhos revisados em `src/data`.
* Imagens quebradas corrigidas.

### Critério de conclusão

* Imagens carregam corretamente.
* Site não ficou pesado.
* Imagens não estão quebradas.
* Portfólio visualmente consistente.
* Imagens têm nomes profissionais.

---

## Fase 11 — Deploy

### Objetivo

Publicar o site na Vercel.

### Entregas

* Projeto no GitHub.
* Deploy na Vercel.
* HTTPS funcionando.
* Build validado.
* Link final do site.
* Teste no celular e desktop.

### Critério de conclusão

* Site publicado.
* Site acessível no celular e desktop.
* WhatsApp funcionando no site publicado.
* HTTPS ativo.
* Nenhum erro visual grave no deploy.

---

## Fase 12 — Documentação e Entrega

### Objetivo

Entregar o projeto de forma profissional.

### Skill recomendada

Client Delivery

### Entregas

* README final.
* Instruções de manutenção.
* Como trocar textos.
* Como trocar imagens.
* Como alterar WhatsApp.
* Como alterar Instagram.
* Como publicar nova versão.
* Checklist técnico.
* Checklist visual.
* Checklist de segurança.
* Checklist de SEO.
* Lista do que está incluso.
* Lista do que não está incluso.
* Melhorias futuras recomendadas.

### Critério de conclusão

* Cliente recebeu o link final.
* Cliente recebeu explicação do que foi entregue.
* Projeto está documentado.
* Escopo entregue está claro.
* Melhorias futuras estão separadas.
* O projeto pode ser mantido depois sem confusão.

---

# 18. Checklists de Validação

## 18.1 Checklist Técnico

* Site roda localmente.
* Build roda sem erro.
* Não há backend.
* Não há login.
* Não há banco de dados.
* Não há upload.
* Estrutura de pastas está organizada.
* Dados estão centralizados em `src/data`.
* WhatsApp está centralizado em `siteConfig.ts`.
* Componentes estão separados.
* README existe.

## 18.2 Checklist Visual

* O site parece premium.
* O site não parece template genérico.
* A primeira dobra comunica claramente o foco.
* Cards estão bem organizados.
* Imagens têm destaque.
* Espaçamentos estão bons.
* Mobile está bem resolvido.
* Botões são visíveis.
* Footer está profissional.

## 18.3 Checklist Comercial

* O foco está em camas e cabeceiras personalizadas.
* O portfólio mostra projetos finalizados.
* O processo de orçamento está claro.
* O WhatsApp aparece em pontos estratégicos.
* O visitante entende o que a empresa faz.
* O site passa confiança.
* Não há textos exagerados ou promessas falsas.

## 18.4 Checklist de Segurança

* HTTPS ativo.
* Headers configurados.
* Nenhuma credencial exposta.
* Nenhum token no código.
* Links externos usam `rel="noopener noreferrer"`.
* Não há `dangerouslySetInnerHTML`.
* Não há upload.
* Não há coleta desnecessária de dados.
* `npm audit` revisado.
* Build sem erro.

## 18.5 Checklist de SEO

* Title configurado.
* Meta description configurada.
* H1 único.
* H2s organizados.
* Imagens com alt text.
* Open Graph básico.
* Palavras-chave usadas naturalmente.
* Cidade/região só aparece se confirmada.
* Não há keyword stuffing.

## 18.6 Checklist de Entrega

* Site publicado.
* Link final testado.
* WhatsApp testado.
* README final criado.
* Cliente aprovou conteúdo.
* Cliente aprovou visual.
* Melhorias futuras separadas.
* Escopo final documentado.

---

# 19. Riscos do Projeto e Mitigações

## Risco 1 — Site ficar genérico

Mitigação:

* Usar fotos reais.
* Usar textos específicos.
* Reforçar especialidade em camas e cabeceiras.
* Usar a skill Premium Furniture UI.
* Evitar componentes com aparência de template comum.

## Risco 2 — Codex criar funcionalidades fora do escopo

Mitigação:

* Trabalhar fase por fase.
* Reforçar regras permanentes em cada prompt.
* Não pedir “faça tudo”.
* Validar cada fase antes de avançar.

## Risco 3 — Falta de fotos reais

Mitigação:

* Pedir fotos antes da fase de dados reais.
* Usar placeholders apenas temporariamente.
* Organizar imagens por categoria.
* Explicar ao cliente que foto real é essencial para o resultado.

## Risco 4 — Cliente esperar painel administrativo

Mitigação:

* Explicar que a primeira versão não terá painel.
* Tratar painel como melhoria futura.
* Documentar o que está incluso e fora do escopo.

## Risco 5 — Informações inventadas

Mitigação:

* Usar placeholders.
* Confirmar tudo com o cliente.
* Revisar conteúdo antes da entrega.
* Não inventar cidade, experiência, garantia, materiais ou prazos.

## Risco 6 — Site ficar pesado

Mitigação:

* Otimizar imagens.
* Usar WebP.
* Evitar bibliotecas pesadas.
* Usar lazy loading.
* Revisar build.

---

# 20. Melhorias Futuras

Após o MVP, podem ser consideradas:

* Página individual para cada projeto.
* Filtros por categoria no portfólio.
* Página separada para serviços.
* Blog com dicas de decoração e manutenção.
* Google Analytics.
* Google Search Console.
* Domínio próprio.
* Google Meu Negócio.
* Formulário simples de contato.
* Painel administrativo.
* Integração com CMS.
* Galeria avançada.
* Página de depoimentos.
* Página de perguntas frequentes.
* Integração com Instagram.

Nenhuma dessas melhorias deve entrar na primeira versão sem aprovação.

---

# 21. Critérios Gerais de Aceitação

O projeto só será considerado pronto quando:

* O site estiver responsivo.
* O foco estiver claro em camas e cabeceiras personalizadas.
* O portfólio mostrar projetos finalizados.
* Não houver seção de antes e depois.
* O WhatsApp estiver funcionando.
* O site estiver sem backend, login, banco e upload.
* O build rodar sem erro.
* O SEO básico estiver configurado.
* A segurança básica estiver revisada.
* O site estiver publicado na Vercel.
* O README estiver completo.
* O cliente tiver aprovado o conteúdo e o visual.

---

# 22. Prompt Mestre para o Codex

Use este prompt antes de iniciar o desenvolvimento:

```txt
Este projeto deve seguir o Planejamento Técnico Inicial do Site de Camas e Cabeceiras Personalizadas.

O projeto será desenvolvido em fases. Não implemente tudo de uma vez.

Objetivo:
Criar um site institucional em formato de portfólio comercial para uma empresa especialista em camas e cabeceiras personalizadas.

Stack oficial:
- React
- TypeScript
- Vite
- TailwindCSS
- Vercel

Regras permanentes:
- Não criar backend
- Não criar login
- Não criar banco de dados
- Não criar upload de arquivos
- Não criar seção de antes e depois
- Não adicionar bibliotecas pesadas sem necessidade
- Não inventar dados do cliente
- Não copiar layout, textos ou imagens de sites de referência
- Manter foco em camas e cabeceiras personalizadas
- Usar WhatsApp como canal principal de contato
- Priorizar segurança, performance, responsividade e manutenção

Skills disponíveis:
- Premium Furniture UI
- Portfolio Commercial Copy
- WhatsApp Conversion
- Static Site Security
- Local SEO Furniture
- Client Delivery

Sempre que finalizar uma fase, informe:
1. O que foi feito
2. Arquivos criados ou alterados
3. Como testar
4. Pendências
5. Próxima fase recomendada

Comece apenas pela fase solicitada. Não avance para a próxima fase sem autorização.
```

---

# 23. Prompt de Execução — Fase 1

```txt
Execute apenas a Fase 1 — Base Técnica.

Objetivo:
Criar a estrutura inicial do projeto, configurar a stack oficial e garantir que o projeto rode localmente.

Stack:
- React
- TypeScript
- Vite
- TailwindCSS

Entregas:
- Projeto React + TypeScript + Vite criado
- TailwindCSS configurado
- Estrutura de pastas criada
- App.tsx temporário
- README inicial
- vercel.json com headers básicos de segurança
- npm run dev funcionando
- npm run build funcionando

Estrutura inicial esperada:
camas-cabeceiras-site/
  public/
    images/
      hero/
      portfolio/
      categories/
      logo/

  src/
    components/
    data/
    utils/
    App.tsx
    main.tsx
    index.css

  docs/
    planejamento-tecnico-inicial.md
    checklist-entrega.md
    briefing-cliente.md

  vercel.json
  README.md
  package.json

Regras:
- Não criar layout completo ainda
- Não criar Hero
- Não criar Portfólio
- Não criar Serviços
- Não criar backend
- Não criar login
- Não criar banco de dados
- Não criar upload de arquivos
- Não criar seção de antes e depois
- Não adicionar bibliotecas pesadas sem necessidade

Ao finalizar, informe:
1. O que foi feito
2. Arquivos criados ou alterados
3. Como rodar localmente
4. Como validar o build
5. Pendências
6. Próxima fase recomendada
```

---

# 24. Prompt de Execução — Fase 2

```txt
Execute apenas a Fase 2 — Dados Base do Site.

Objetivo:
Criar os arquivos de dados que alimentarão o site.

Arquivos a criar:
- src/data/siteConfig.ts
- src/data/categories.ts
- src/data/portfolio.ts
- src/data/services.ts
- src/utils/whatsapp.ts

Regras:
- Usar dados temporários e fáceis de substituir
- Não inventar dados reais do cliente
- Não criar backend
- Não criar login
- Não criar banco de dados
- Não criar upload
- Não criar seção de antes e depois
- Não usar beforeImage ou afterImage no portfólio
- Centralizar WhatsApp em siteConfig.ts

Categorias:
- Camas Personalizadas
- Cabeceiras Personalizadas
- Cabeceiras Estofadas
- Camas Box Sob Medida
- Recamiers
- Puffs
- Estofados Sob Medida

Cada item do portfólio deve ter:
- id
- title
- category
- description
- highlight
- image

Ao finalizar, informe:
1. O que foi feito
2. Arquivos criados ou alterados
3. Como alterar textos
4. Como alterar WhatsApp
5. Pendências
6. Próxima fase recomendada
```

---

# 25. Prompt de Execução — Fase 3

```txt
Execute apenas a Fase 3 — Estrutura Visual Básica.

Objetivo:
Criar os componentes principais do site em versão funcional, sem refinamento visual premium ainda.

Componentes a criar:
- Header
- Hero
- Categories
- Portfolio
- CustomProjects
- Services
- Process
- About
- Contact
- Footer
- WhatsAppButton

Montar no App.tsx nesta ordem:
1. Header
2. Hero
3. Categories
4. Portfolio
5. CustomProjects
6. Services
7. Process
8. About
9. Contact
10. Footer
11. WhatsAppButton

Conteúdo principal:
Hero:
Título: “Especialistas em camas e cabeceiras personalizadas”
Subtítulo: “Criamos camas, cabeceiras e estofados sob medida para transformar quartos em ambientes mais confortáveis, elegantes e personalizados.”

Botões:
- Ver projetos
- Solicitar orçamento

Processo de orçamento:
1. O cliente envia uma referência ou ideia pelo WhatsApp
2. A equipe entende o modelo desejado
3. São avaliadas medidas, tecido, acabamento e detalhes do projeto
4. O orçamento é enviado com as informações combinadas
5. Após aprovação, o projeto é produzido sob medida
6. A entrega ou instalação é combinada conforme o atendimento

Regras:
- Não fazer refinamento visual premium ainda
- Não criar backend
- Não criar login
- Não criar banco de dados
- Não criar upload
- Não criar seção de antes e depois
- Usar dados de src/data
- Usar função de WhatsApp existente
- Manter layout funcional e responsivo básico

Ao finalizar, informe:
1. O que foi feito
2. Componentes criados
3. Arquivos alterados
4. Como testar
5. Pendências
6. Próxima fase recomendada
```

---

# 26. Prompt de Execução — Fase 4

```txt
Execute apenas a Fase 4 — Refinamento Visual Premium.

Use a skill Premium Furniture UI.

Objetivo:
Melhorar a interface para parecer um site premium de camas personalizadas, cabeceiras estofadas e móveis sob medida.

Melhorar:
- Header
- Hero
- Categories
- Portfolio
- CustomProjects
- Services
- Process
- About
- Contact
- Footer
- WhatsAppButton

Direção visual:
- Elegante
- Artesanal
- Premium
- Confiável
- Inspirado em móveis sob medida e decoração
- Tons de bege, creme, marrom, caramelo e preto suave
- Fotos grandes
- Cards bem espaçados
- Boa hierarquia visual
- Tipografia limpa e sofisticada

Evitar:
- Visual genérico de IA
- Visual muito tecnológico
- Excesso de animação
- Bibliotecas pesadas
- Mudanças fora do escopo

Manter:
- React
- TypeScript
- Vite
- TailwindCSS
- Sem backend
- Sem login
- Sem banco de dados
- Sem upload
- Sem antes e depois

Ao finalizar, informe:
1. O que foi melhorado
2. Arquivos alterados
3. Como testar no desktop e mobile
4. O que ainda precisa de dados reais
5. Próxima fase recomendada
```

---

# 27. Prompt de Execução — Fase 5

```txt
Execute apenas a Fase 5 — Conversão para WhatsApp.

Use a skill WhatsApp Conversion.

Objetivo:
Revisar o site com foco em captar clientes pelo WhatsApp.

Avaliar e melhorar:
- Clareza do Hero
- Texto dos botões
- Posição dos CTAs
- Botão flutuante de WhatsApp
- Seção de orçamento
- Fluxo de leitura no mobile
- Se o visitante entende rapidamente que a empresa é especialista em camas e cabeceiras personalizadas
- Se o portfólio ajuda o cliente a pedir orçamento
- Se existem distrações desnecessárias

Mensagem padrão do WhatsApp:
“Olá, vi o portfólio de camas e cabeceiras personalizadas e gostaria de solicitar um orçamento. Posso enviar uma referência do que estou procurando?”

Regras:
- Não criar formulário complexo
- Não criar upload
- Não criar backend
- Não criar login
- Não criar banco de dados
- Manter WhatsApp como canal principal
- Não adicionar bibliotecas desnecessárias
- Não criar antes e depois

Ao finalizar, informe:
1. Problemas de conversão encontrados
2. Melhorias aplicadas
3. Arquivos alterados
4. Sugestões opcionais
5. Próxima fase recomendada
```

---

# 28. Prompt de Execução — Fase 6

```txt
Execute apenas a Fase 6 — Textos Comerciais.

Use a skill Portfolio Commercial Copy.

Objetivo:
Revisar todos os textos do site para deixá-los mais profissionais, claros e comerciais, sem exageros.

Foco:
- Camas personalizadas
- Cabeceiras personalizadas
- Cabeceiras estofadas
- Camas sob medida
- Recamiers
- Puffs
- Estofados personalizados
- Projetos sob medida para quartos

Melhorar textos de:
- Hero
- Categorias
- Portfólio
- Projetos sob medida
- Serviços
- Como funciona o orçamento
- Sobre
- Contato
- CTAs

Tom:
- Profissional
- Elegante
- Claro
- Comercial
- Sem promessas falsas
- Sem frases genéricas demais

Importante:
- Não inventar anos de experiência
- Não inventar garantia
- Não inventar cidade
- Não inventar prazo
- Não inventar materiais específicos
- Usar placeholders quando faltar informação real do cliente
- Não criar seção de antes e depois

Ao finalizar, informe:
1. Textos melhorados
2. Arquivos alterados
3. Informações que ainda precisam ser confirmadas com o cliente
4. Próxima fase recomendada
```

---

# 29. Prompt de Execução — Fase 7

```txt
Execute apenas a Fase 7 — SEO Local.

Use a skill Local SEO Furniture.

Objetivo:
Implementar SEO básico para o site.

O site é de uma empresa especialista em:
- Camas personalizadas
- Cabeceiras personalizadas
- Cabeceiras estofadas
- Camas sob medida
- Recamiers
- Puffs
- Estofados personalizados

Melhorar:
- Title
- Meta description
- Open Graph básico
- H1, H2 e H3
- Alt text das imagens
- Textos semânticos das categorias
- Textos dos serviços
- Termos locais usando placeholders quando a cidade/região ainda não estiver confirmada

Title sugerido:
“Camas e Cabeceiras Personalizadas em [Cidade] | [Nome da Empresa]”

Meta description sugerida:
“Especialistas em camas, cabeceiras e estofados personalizados em [Cidade]. Projetos sob medida com acabamento profissional. Solicite orçamento pelo WhatsApp.”

Regras:
- Não fazer keyword stuffing
- Não inventar cidade
- Não inventar nome da empresa
- Usar placeholders quando faltar dado real
- Não adicionar bibliotecas pesadas
- Manter o site estático e simples
- Não criar antes e depois

Ao finalizar, informe:
1. Ajustes de SEO aplicados
2. Arquivos alterados
3. Campos que precisam dos dados reais do cliente
4. Checklist de SEO
5. Próxima fase recomendada
```

---

# 30. Prompt de Execução — Fase 8

```txt
Execute apenas a Fase 8 — Segurança.

Use a skill Static Site Security.

Objetivo:
Revisar o projeto como site estático para cliente real.

Verificar:
- Credenciais expostas
- Tokens no código
- Variáveis de ambiente incorretas
- Uso de dangerouslySetInnerHTML
- Links externos sem rel="noopener noreferrer"
- Dependências desnecessárias
- Vulnerabilidades em dependências
- Headers de segurança no vercel.json
- Coleta desnecessária de dados pessoais
- Upload de arquivos
- Formulários inseguros
- Backend desnecessário
- Login desnecessário
- Banco de dados desnecessário
- Erros de TypeScript
- Erros de build

Regras do projeto:
- Sem backend
- Sem login
- Sem banco de dados
- Sem upload
- Sem armazenamento de dados sensíveis
- Contato principal via WhatsApp
- Sem seção de antes e depois

Também rode ou oriente a rodar:
- npm run build
- npm audit
- npm run type-check, se existir

Ao finalizar, informe:
1. Riscos encontrados
2. Correções aplicadas
3. Correções obrigatórias pendentes
4. Melhorias opcionais
5. Checklist final de segurança
6. Próxima fase recomendada
```

---

# 31. Prompt de Execução — Fase 9

```txt
Execute apenas a Fase 9 — Inserção dos Dados Reais do Cliente.

Objetivo:
Substituir placeholders pelas informações reais do cliente.

Substitua os dados abaixo:

Nome da empresa:
[INSERIR]

WhatsApp:
[INSERIR]

Instagram:
[INSERIR]

Região de atendimento:
[INSERIR]

Horário de atendimento:
[INSERIR]

Serviços reais:
[INSERIR]

Diferenciais reais:
[INSERIR]

Informações sobre entrega/instalação:
[INSERIR]

Fotos disponíveis:
[INSERIR NOMES OU CAMINHOS DAS IMAGENS]

Regras:
- Não inventar informações
- Se algum dado estiver faltando, manter placeholder claro
- Atualizar siteConfig.ts
- Atualizar categories.ts
- Atualizar portfolio.ts
- Atualizar services.ts
- Atualizar textos que dependem dos dados reais
- Manter foco em camas e cabeceiras personalizadas
- Não adicionar antes e depois
- Não adicionar backend
- Não adicionar upload
- Não adicionar banco de dados

Ao finalizar, informe:
1. Dados substituídos
2. Dados que ainda faltam
3. Arquivos alterados
4. Itens que precisam de aprovação do cliente
5. Próxima fase recomendada
```

---

# 32. Prompt de Execução — Fase 10

```txt
Execute apenas a Fase 10 — Imagens e Performance.

Objetivo:
Organizar e otimizar as imagens usadas no site.

Faça:
- Organizar imagens em public/images/hero
- Organizar imagens em public/images/categories
- Organizar imagens em public/images/portfolio
- Usar nomes descritivos
- Garantir alt text adequado
- Usar loading="lazy" quando fizer sentido
- Evitar imagens muito pesadas
- Garantir que os caminhos das imagens estejam corretos em src/data
- Corrigir imagens quebradas
- Revisar performance visual

Nomes recomendados:
- cama-personalizada-bege.webp
- cabeceira-estofada-sob-medida.webp
- recamier-quarto-casal.webp
- puff-personalizado.webp

Regras:
- Não criar antes e depois
- Não adicionar biblioteca pesada de imagem
- Não alterar escopo do projeto
- Não criar upload de arquivos
- Não usar imagens externas sem necessidade

Ao finalizar, informe:
1. Imagens organizadas
2. Caminhos ajustados
3. Alt texts criados ou revisados
4. Imagens que ainda precisam ser otimizadas manualmente
5. Próxima fase recomendada
```

---

# 33. Prompt de Execução — Fase 11

```txt
Execute apenas a Fase 11 — Preparação para Deploy na Vercel.

Objetivo:
Revisar o projeto para publicação.

Verificar:
- package.json
- Scripts de dev, build e preview
- Build funcionando
- vercel.json correto
- Assets públicos funcionando
- Rotas, se houver
- SEO básico
- Headers de segurança
- README com instruções de deploy
- Responsividade final
- WhatsApp funcionando

Não adicionar:
- Backend
- Banco de dados
- Login
- Upload
- Bibliotecas desnecessárias
- Antes e depois

Ao finalizar, informe:
1. Se o projeto está pronto para deploy
2. Comandos finais para testar
3. Passo a passo para publicar na Vercel usando GitHub
4. Possíveis pontos de atenção
5. Próxima fase recomendada
```

---

# 34. Prompt de Execução — Fase 12

```txt
Execute apenas a Fase 12 — Documentação e Entrega Final.

Use a skill Client Delivery.

Objetivo:
Preparar a documentação final do projeto para entrega ao cliente.

O projeto é um site institucional em React + TypeScript + Vite + TailwindCSS para uma empresa especialista em camas e cabeceiras personalizadas.

Inclua no README:
- Visão geral do projeto
- Tecnologias utilizadas
- Como rodar localmente
- Como fazer build
- Como publicar na Vercel
- Como trocar textos
- Como trocar imagens
- Como alterar WhatsApp
- Como alterar Instagram
- Como alterar região de atendimento
- Cuidados de segurança
- Estrutura de pastas
- O que está incluso
- O que não está incluso
- Melhorias futuras recomendadas

Também gere:
- Checklist técnico
- Checklist visual
- Checklist de conteúdo
- Checklist de segurança
- Checklist de SEO
- Checklist de entrega

Regras:
- Não adicionar funcionalidades novas
- Não criar backend
- Não criar login
- Não criar banco de dados
- Não criar upload
- Não criar antes e depois
- Apenas documentar e preparar entrega

Ao finalizar, informe:
1. Documentação criada
2. Pendências para entrega
3. Melhorias futuras recomendadas
4. Checklist final
```

---

# 35. Ordem Oficial das Fases

A ordem oficial do projeto será:

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

Nenhuma fase deve ser pulada. Nenhuma fase deve ser executada junto com outra sem validação.

---

# 36. Observação Final

Este projeto deve ser tratado como entrega comercial para cliente real.

O objetivo não é criar o site mais complexo possível. O objetivo é criar um site profissional, seguro, visualmente forte e focado em gerar orçamento pelo WhatsApp.

O risco principal é aumentar o escopo sem necessidade. Portanto, qualquer sugestão de backend, login, painel, banco de dados, upload ou antes/depois deve ser recusada nesta primeira versão e tratada apenas como melhoria futura.

