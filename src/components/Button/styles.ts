import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'outline'

interface StyledButtonProps {
  $variant: ButtonVariant
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 10px 22px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  cursor: pointer;
  touch-action: manipulation;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  ${({ $variant }: StyledButtonProps) =>
    $variant === 'primary'
      ? css`
          background: var(--color-primary);
          color: var(--color-surface);

          @media (hover: hover) and (pointer: fine) {
            &:hover {
              background: var(--color-primary-hover);
              transform: translateY(-1px);
            }
          }
        `
      : css`
          background: var(--color-surface);
          color: var(--color-primary);
          border-color: var(--color-primary);

          @media (hover: hover) and (pointer: fine) {
            &:hover {
              background: rgba(43, 122, 223, 0.08);
              transform: translateY(-1px);
            }
          }
        `};

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(43, 122, 223, 0.35);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition:
      background 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;

    &:hover,
    &:active {
      transform: none;
    }
  }
`
