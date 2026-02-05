# Desafio Técnico — Front-end Júnior

Implementação em React de duas dobras do layout do Figma, priorizando fidelidade visual (com bom senso), organização do código, componentização e responsividade.

## Dobras implementadas

- Hero (headline + CTAs + modal de vídeo)
- Planos (imagem + lista de benefícios empilhada + CTA)

## Como rodar o projeto

### Requisitos

- Node.js 20+ (testado com Node.js 22.15.0)
- npm (via instalação do Node)

### Comandos

```bash
npm install
npm run dev
```

Outros comandos úteis:

```bash
npm run lint
npm run build
npm run preview
```

## Decisões técnicas

- React + TypeScript + Vite para DX e build rápido.
- `styled-components` para estilos co-localizados por componente e reutilização (ex.: `Button`, `Container`, `Section`).
- Tokens/variáveis de estilo centralizados em `src/styles` (cores, spacing, radius, tipografia).

## Responsividade (UI/UX)

- Layout pensado para funcionar bem em mobile (ex.: 360px) e desktop (ex.: 1440px).
- Breakpoint principal em `960px` para alternar entre layouts (mobile ↔ desktop).
- Estados básicos de interação: `hover`, `focus-visible`, `disabled` (com hover aplicado apenas em dispositivos com suporte a hover).

## Acessibilidade

- HTML semântico (ex.: lista de benefícios em `ul/li`).
- Foco visível em elementos interativos.
- `alt` em imagens informativas.
- Respeito a `prefers-reduced-motion` em animações.

## Decisões fora do Figma (documentadas)

- Loading da imagem de planos com skeleton/shimmer para evitar “flash” em rede lenta.
- CTAs externos (checkout/WhatsApp) abrem em nova aba para não tirar o usuário da página.

## Formatação (extra)

- `npm run format` — aplica Prettier no projeto
- `npm run format:check` — valida formatação (útil para CI)

## Restrições do desafio

- Não foi feito deploy/hospedagem (Vercel/Netlify etc.).
- Não há credenciais/tokens no repositório.
