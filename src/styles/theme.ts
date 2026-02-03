export const theme = {
  colors: {
    background: '#e0ffde',
    surface: '#FFFFFF',
    text: '#1B1F23',
    textMuted: '#1E2124',
    primary: '#2B7ADF',
    primaryHover: '#2469C1',
    outline: '#D5DDE5',
    success: '#83e87c',
    sucessSecondary: '#d4ffd1',
  },
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  radius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    pill: '999px',
  },
  font: {
    family: "'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif",
    familyAlt: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    size: {
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '32px',
      xxl: '36px',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  layout: {
    maxWidth: '1120px',
  },
  shadow: {
    soft: '0 24px 60px rgba(27, 31, 35, 0.08)',
  },
}

export type Theme = typeof theme
