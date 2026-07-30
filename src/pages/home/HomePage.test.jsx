import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HomePage } from '@/pages/home'

describe('HomePage', () => {
  it('renders plant categories and featured content', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', { name: /why choose mygreenheaven\.in/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /bring nature home/i }),
    ).toBeInTheDocument()
  })
})
