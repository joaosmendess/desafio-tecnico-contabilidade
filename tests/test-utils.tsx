import type { PropsWithChildren, ReactElement } from 'react'
import { cleanup, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'

export function renderWithProviders(ui: ReactElement) {
  cleanup()

  function Wrapper({ children }: PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }

  return render(ui, { wrapper: Wrapper })
}
