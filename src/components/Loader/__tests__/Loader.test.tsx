import { render } from '@testing-library/react'

import { Loader } from '../Loader'

describe('<Loader />', () => {
  it('should render Loader', () => {
    const { getByTestId } = render(<Loader data-testid="loading" />)
    expect(getByTestId('loading')).toBeVisible()
  })
})
