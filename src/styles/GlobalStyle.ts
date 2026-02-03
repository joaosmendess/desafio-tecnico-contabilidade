import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: ${({ theme }) => theme.colors.background};
    --color-surface: ${({ theme }) => theme.colors.surface};
    --color-text: ${({ theme }) => theme.colors.text};
    --color-text-muted: ${({ theme }) => theme.colors.textMuted};
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-hover: ${({ theme }) => theme.colors.primaryHover};
    --color-outline: ${({ theme }) => theme.colors.outline};
    --color-success: ${({ theme }) => theme.colors.success};

    --radius-sm: ${({ theme }) => theme.radius.sm};
    --radius-md: ${({ theme }) => theme.radius.md};
    --radius-lg: ${({ theme }) => theme.radius.lg};
    --radius-xl: ${({ theme }) => theme.radius.xl};
    --radius-pill: ${({ theme }) => theme.radius.pill};

    --space-xs: ${({ theme }) => theme.spacing.xs};
    --space-sm: ${({ theme }) => theme.spacing.sm};
    --space-md: ${({ theme }) => theme.spacing.md};
    --space-lg: ${({ theme }) => theme.spacing.lg};
    --space-xl: ${({ theme }) => theme.spacing.xl};
    --space-2xl: ${({ theme }) => theme.spacing.xxl};

    --font-family: ${({ theme }) => theme.font.family};
    --font-family-alt: ${({ theme }) => theme.font.familyAlt};
    --font-size-sm: ${({ theme }) => theme.font.size.sm};
    --font-size-md: ${({ theme }) => theme.font.size.md};
    --font-size-lg: ${({ theme }) => theme.font.size.lg};
    --font-size-xl: ${({ theme }) => theme.font.size.xl};
    --font-size-2xl: ${({ theme }) => theme.font.size.xxl};

    --font-weight-regular: ${({ theme }) => theme.font.weight.regular};
    --font-weight-medium: ${({ theme }) => theme.font.weight.medium};
    --font-weight-semibold: ${({ theme }) => theme.font.weight.semibold};
    --font-weight-bold: ${({ theme }) => theme.font.weight.bold};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: var(--font-family);
    background: var(--color-bg);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  img,
  svg,
  video {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
