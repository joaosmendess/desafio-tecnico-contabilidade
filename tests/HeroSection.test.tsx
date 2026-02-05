import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSection } from '../src/sections/HeroSection'
import { renderWithProviders } from './test-utils'
import React from 'react'

describe('HeroSection', () => {
  it('renders hero copy and CTAs', () => {
    renderWithProviders(<HeroSection />)

    expect(
      screen.getByRole('heading', {
        name: /quanto custa a contabilidade online em 2026\?/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /planos e preços/i })).toHaveAttribute(
      'type',
      'button',
    )
    expect(
      screen.getByRole('button', { name: /falar com especialista/i }),
    ).toHaveAttribute('type', 'button')
  })

  it('opens and closes the video modal', async () => {
    const user = userEvent.setup()
    renderWithProviders(<HeroSection />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /assistir ao vídeo/i }))

    const dialog = screen.getByRole('dialog', { name: /vídeo/i })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByTitle(/contabilidade online/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /fechar/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

