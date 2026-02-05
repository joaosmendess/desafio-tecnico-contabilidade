import type { ButtonHTMLAttributes } from 'react'
import { StyledButton, type ButtonVariant } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  return <StyledButton type={type} $variant={variant} {...props} />
}
