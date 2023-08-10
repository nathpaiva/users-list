import { render } from '@testing-library/react'

import { CardUser } from '../../CardUser'
import { CardUserContainer } from '../CardUserContainer'
import { userDataMock } from './mock'

describe('<CardUserContainer />', () => {
  it('should render CardUserContainer', () => {
    const { getByText } = render(
      <CardUser userData={userDataMock}>
        <CardUserContainer>{userDataMock.name.first}</CardUserContainer>
      </CardUser>,
    )
    expect(getByText(userDataMock.name.first)).toBeVisible()
  })
})
