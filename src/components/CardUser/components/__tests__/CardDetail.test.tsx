import { render } from '@testing-library/react'

import { CardDetail } from '../CardDetail'

describe('<CardDetail />', () => {
  it('should render CardDetail', () => {
    const { getByText } = render(
      <CardDetail>here is the card detail</CardDetail>,
    )
    expect(getByText('here is the card detail')).toBeVisible()
  })
})
