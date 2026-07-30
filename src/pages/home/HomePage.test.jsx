import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HomePage } from '@/pages/home'

describe('HomePage', () => {
  it('renders an empty page', () => {
    const { container } = render(<HomePage />)

    expect(container).toBeEmptyDOMElement()
  })
})
