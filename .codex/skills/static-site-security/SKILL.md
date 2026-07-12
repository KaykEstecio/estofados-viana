---
name: static-site-security
description: Review and improve basic security for a static institutional portfolio website built with React, TypeScript, Vite, TailwindCSS, and deployed on Vercel. Use when checking exposed credentials, tokens, environment variables, dangerouslySetInnerHTML, unsafe external links, unnecessary or vulnerable dependencies, insecure forms, file uploads, excessive personal data collection, missing Vercel security headers, build problems, and TypeScript errors for a WhatsApp-first furniture site.
---

# Static Site Security

## Nome

Static Site Security

## Descricao

Use esta skill para revisar seguranca basica de um site institucional estatico em React, TypeScript, Vite, TailwindCSS e deploy na Vercel.

## Quando usar

Use antes de publicar, ao revisar PRs, ao configurar Vercel, ao adicionar dependencias, ao mexer em links externos, formularios, variaveis de ambiente ou qualquer codigo que possa expor dados.

## Instrucoes detalhadas

- Procurar credenciais expostas, tokens, chaves, URLs privadas e segredos.
- Revisar uso de variaveis de ambiente, especialmente variaveis `VITE_*`, que ficam expostas no frontend.
- Verificar `dangerouslySetInnerHTML` e remover quando nao for necessario.
- Verificar links externos com `target="_blank"` e exigir `rel="noopener noreferrer"`.
- Avaliar dependencias desnecessarias e vulneraveis.
- Verificar se ha formularios inseguros ou coleta excessiva de dados.
- Remover upload de arquivos quando nao for parte do escopo.
- Garantir que o site continue sem backend, login, banco de dados ou armazenamento sensivel.
- Revisar build, TypeScript e arquivos publicos.
- Recomendar headers basicos de seguranca no `vercel.json`.

Headers recomendados:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

## Regras do projeto

- Nao adicionar backend.
- Nao adicionar login.
- Nao adicionar banco de dados.
- Nao adicionar upload de arquivos.
- Nao armazenar dados sensiveis.
- Nao coletar dados pessoais desnecessarios.
- Manter contato principal via WhatsApp.
- Nao adicionar bibliotecas pesadas sem necessidade.

## Formato esperado da resposta

Ao finalizar, retornar:

1. Riscos encontrados.
2. Correcoes obrigatorias.
3. Melhorias recomendadas.
4. Itens opcionais.
5. Checklist final de seguranca.
