import { render } from '@testing-library/react'

import { CardUser } from '../../CardUser'
import { userDataMock } from './mock'

describe('<CardImage />', () => {
  it('should render CardImage', () => {
    const { getByAltText } = render(
      <CardUser userData={userDataMock}>
        <CardUser.Image />
      </CardUser>,
    )
    expect(
      getByAltText(
        `profile of: ${userDataMock.name.first} ${userDataMock.name.last}`,
      ),
    ).toBeVisible()
  })
})
