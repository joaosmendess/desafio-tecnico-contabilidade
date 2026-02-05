# Desafio Técnico — Contabilidade.com (Front-end Júnior)

Implementação em React de **duas dobras/sections** do layout do Figma, priorizando fidelidade visual (com bom senso), organização do código, componentização/reutilização, responsividade e a11y básica.

## Dobras implementadas

- **Hero**: headline + CTAs + thumb + modal de vídeo
- **Planos e Preços**: imagem + lista de benefícios em cards “colados” (overlap) + CTA

## Como rodar o projeto

### Requisitos

- Node.js **v22** (testado com **v22.15.0**)
- npm

### Comandos

```bash
npm install
npm run dev
```

Abra a aplicação no navegador (por padrão, Vite usa `http://localhost:5173`).

Scripts úteis (DX/qualidade):

- `npm run lint` — lint (ESLint)
- `npm run build` — build de produção
- `npm run preview` — preview do build
- `npm run format` / `npm run format:check` — formatação (Prettier)
- `npm run test:run` — testes automatizados (Vitest)

## Estrutura do projeto

Organização com separação de responsabilidades (UI vs. dados/helpers) e foco em reutilização:

```txt
src/
  components/        # UI reutilizável (Button, Container, Section, etc.)
  sections/          # Dobras do layout (HeroSection, PlansSection)
  styles/            # Theme/tokens e estilos globais
tests/               # Vitest + Testing Library
public/              # Assets servidos diretamente (ex.: favicon)
```

## Decisões técnicas

- **React + TypeScript + Vite**
- **styled-components** para estilização (conforme requisito do desafio)
  - Escolha por co-localizar estilos com os componentes, facilitar reutilização e variações (ex.: `Button` com `variant`)
  - Tema tipado via TypeScript para reduzir “magic numbers” e manter consistência
- Tokens/variáveis em `src/styles/theme.ts` e CSS variables em `src/styles/GlobalStyle.ts`
  - Centraliza cores, espaçamentos, radius e tipografia, deixando o CSS mais consistente e legível
- Componentes reutilizáveis em `src/components`
  - `Button`: estados (hover/focus/disabled) e `type="button"` por padrão
  - `Container`/`Section`: estrutura e largura máxima para consistência entre dobras
- Separação de responsabilidades dentro das sections
  - `src/sections/PlansSection/data.ts`: dados de benefícios isolados do markup
  - `src/sections/PlansSection/icons.tsx`: ícones SVG isolados e reutilizáveis
  - `src/sections/PlansSection/styles.ts`: estilos encapsulados do layout da dobra

## Responsividade (UI/UX)

- Layout pensado para funcionar bem em **mobile** (ex.: 360px) e **desktop** (ex.: 1440px)
- Breakpoint principal em `960px` para alternar entre layouts (mobile ↔ desktop)
- Estados básicos: `hover`, `focus-visible`, `disabled`
  - Hover aplicado só em dispositivos que suportam hover (`@media (hover: hover)`)
  - Animações respeitam `prefers-reduced-motion`

## Acessibilidade (básico)

- HTML semântico quando aplicável
  - Lista de benefícios em `ul/li` (para leitores de tela e navegação por landmarks/roles)
- Botões reais (`<button>`) e `type="button"` por padrão (evita submit acidental)
- Foco visível em elementos interativos (`:focus-visible`)
- Imagens informativas com `alt`
- Ícones decorativos com `aria-hidden="true"` e `focusable="false"`

## Decisões fora do Figma (documentadas)

- **Carregamento da imagem** (Planos e Preços)
  - `loading="lazy"` + `decoding="async"` para performance
  - Placeholder (shimmer) + `aspect-ratio` para reduzir “pulo” de layout (CLS) em rede lenta
  - Em erro de carregamento, o placeholder é desativado para não ficar “travado”
- **Modal de vídeo**
  - Uso de `role="dialog"`, `aria-modal` e `aria-label`
  - Fechamento via botão dedicado (mantive simples; não foi implementado focus-trap/ESC)
- **Navegação/URLs**
  - O Figma não especifica rotas/links, então os CTAs foram mantidos como botões (fácil de plugar URLs depois sem mudar a estrutura)
- **Favicon**
  - Adicionado um `favicon.svg` simples em `public/` para evitar 404 e ruído no console durante o desenvolvimento

## Extras (opcionais do desafio)

- ESLint + Prettier configurados
- Testes automatizados com **Vitest + Testing Library**
  - Observação: `vitest.config.ts` usa `pool: 'vmThreads'` por estabilidade no Windows/Node 22

## Restrições do desafio

- Não foi feito deploy/hospedagem (Vercel/Netlify etc.)
- Não há credenciais/tokens no repositório
