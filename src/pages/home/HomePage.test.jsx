import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HomePage } from '@/pages/home'

describe('HomePage', () => {
  it('renders the product headline', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: /my green heaven/i }),
    ).toBeInTheDocument()
  })
})
