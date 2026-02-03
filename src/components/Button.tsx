import styled, { css } from 'styled-components'

type Variant = 'primary' | 'outline'

interface ButtonProps {
  $variant?: Variant
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 10px 22px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid transparent;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.sm};
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease,
    color 0.2s ease, border-color 0.2s ease;

  ${({ theme, $variant = 'primary' }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.surface};

          &:hover {
            background: ${theme.colors.primaryHover};
            transform: translateY(-1px);
          }
        `
      : css`
          background: ${theme.colors.surface};
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};

          &:hover {
            background: rgba(47, 111, 237, 0.08);
            transform: translateY(-1px);
          }
        `};

  &:focus-visible {
    outline: 3px solid rgba(47, 111, 237, 0.35);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`
