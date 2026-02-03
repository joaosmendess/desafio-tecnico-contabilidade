import type { ButtonHTMLAttributes } from 'react'
import { StyledButton, type ButtonVariant } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return <StyledButton $variant={variant} {...props} />
}
