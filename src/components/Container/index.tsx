import type { HTMLAttributes } from 'react'
import { ContainerRoot } from './styles'

export type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ children, ...props }: ContainerProps) {
  return <ContainerRoot {...props}>{children}</ContainerRoot>
}
