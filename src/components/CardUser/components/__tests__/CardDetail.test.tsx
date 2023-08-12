import { render, screen } from '@testing-library/react'

import { CardDetail } from '../CardDetail'

describe('<CardDetail />', () => {
  it('should render CardDetail', () => {
    render(<CardDetail>here is the card detail</CardDetail>)
    expect(screen.getByText('here is the card detail')).toBeVisible()
  })
})
