import { render, screen } from '@testing-library/react'

import { Loader } from '../Loader'

describe('<Loader />', () => {
  it('should render Loader', () => {
    render(<Loader data-testid="loading" />)
    expect(screen.getByTestId('loading')).toBeVisible()
  })
})
