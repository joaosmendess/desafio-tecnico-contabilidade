# Desafio Técnico — Contabilidade.com (Front-end Júnior)

Implementação em React de duas dobras/sections do layout do Figma para o teste de Front-end Júnior, com foco em fidelidade visual, organização do código, componentização e responsividade.

## Sections implementadas

- **Hero**: headline + CTAs + thumb + modal de vídeo.
- **Planos e Preços**: imagem + lista de benefícios em cards “colados” (overlap) + CTA.

## Rodando o projeto

### Requisitos

- Node.js **v22** (testado com **v22.15.0**)
- npm

### Comandos

```bash
npm install
npm run dev
```

Outros scripts úteis:

- `npm run build` — build de produção
- `npm run preview` — preview do build
- `npm run lint` — lint (ESLint)
- `npm run format` / `npm run format:check` — formatação (Prettier)
- `npm run test:run` — testes automatizados (Vitest)

## Decisões técnicas

- **React + TypeScript + Vite**
- **styled-components** para estilização (conforme requisito do desafio)
- Tokens de design em `src/styles/theme.ts` e CSS variables em `src/styles/GlobalStyle.ts`
- Componentes reutilizáveis em `src/components` (ex.: `Button`, `Container`, `Section`)
- Sections do layout em `src/sections`

## Decisões fora do Figma (documentadas)

- **Imagem de planos** com `loading="lazy"` e `decoding="async"`, mais `aspect-ratio` + placeholder (shimmer) para evitar “pulo” de layout em conexões lentas.
- Estados de **hover** aplicados só em dispositivos que suportam hover (`@media (hover: hover)`), e animações respeitando `prefers-reduced-motion`.
- **Modal de vídeo** com semântica básica (`role="dialog"`, `aria-modal`, `aria-label`) e botão de fechar dedicado.

## Acessibilidade (básico)

- Botões reais (`<button>`) e `type="button"` por padrão.
- **Foco visível** (`:focus-visible`) nos botões.
- Imagens informativas com `alt`.
- Ícones decorativos com `aria-hidden`.

## Extras (opcionais do desafio)

- ESLint + Prettier configurados
- Testes automatizados com **Vitest + Testing Library**
  - Observação: `vitest.config.ts` usa `pool: 'vmThreads'` por estabilidade no Windows/Node 22.
