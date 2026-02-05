import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlansSection } from '../src/sections/PlansSection'
import { renderWithProviders } from './test-utils'

describe('PlansSection', () => {
  it('renders a semantic benefits list and a lazy-loaded image', () => {
    renderWithProviders(<PlansSection />)

    expect(
      screen.getByRole('heading', { name: /na contabilidade\.com/i }),
    ).toBeInTheDocument()

    const list = screen.getByRole('list')
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(5)

    const image = screen.getByRole('img', {
      name: /profissional de contabilidade em escritório/i,
    })
    expect(image).toHaveAttribute('loading', 'lazy')
    expect(image).toHaveAttribute('decoding', 'async')
  })
})
