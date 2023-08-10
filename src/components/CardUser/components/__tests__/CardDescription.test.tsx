import { render } from '@testing-library/react'

import { CardDescription } from '../CardDescription'

describe('<CardDescription />', () => {
  it('should render CardDescription', () => {
    const { getByText } = render(
      <CardDescription>here is the card description</CardDescription>,
    )
    expect(getByText('here is the card description')).toBeVisible()
  })
})
