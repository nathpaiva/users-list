import { render, screen } from '@testing-library/react'

import { CardDescription } from '../CardDescription'

describe('<CardDescription />', () => {
  it('should render CardDescription', () => {
    render(<CardDescription>here is the card description</CardDescription>)
    expect(screen.getByText('here is the card description')).toBeVisible()
  })
})
