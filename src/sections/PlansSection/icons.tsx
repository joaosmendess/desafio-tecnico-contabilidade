import type { ReactNode } from 'react'
import type { PlanItem } from './data'

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function PlanIcon({ kind }: { kind: PlanItem['icon'] }) {
  switch (kind) {
    case 'open':
      return (
        <Icon>
          <rect x="3" y="7" width="18" height="10" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M5 18L19 6" />
        </Icon>
      )
    case 'certificate':
      return (
        <Icon>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 12h8" />
          <path d="M8 15h5" />
          <circle cx="9" cy="18" r="1.75" />
          <path d="M8.1 19.6l-0.6 2.2l1.5-0.8l1.5 0.8l-0.6-2.2" />
        </Icon>
      )
    case 'invoices':
      return (
        <Icon>
          <path d="M4 3h16v18l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1V3z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
          <path d="M8 15h5" />
        </Icon>
      )
    case 'platform':
      return (
        <Icon>
          <rect x="4" y="5" width="16" height="10" rx="2" />
          <path d="M2 19h20" />
          <path d="M10 17h4" />
        </Icon>
      )
    case 'support':
      return (
        <Icon>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        </Icon>
      )
  }
}

