import type { HTMLAttributes } from 'react'
import { SectionRoot } from './styles'

export type SectionProps = HTMLAttributes<HTMLElement>

export function Section({ children, ...props }: SectionProps) {
  return <SectionRoot {...props}>{children}</SectionRoot>
}
