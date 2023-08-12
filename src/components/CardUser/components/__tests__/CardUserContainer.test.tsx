import { render, screen } from '@testing-library/react'

import { CardUser } from '../../CardUser'
import { CardUserContainer } from '../CardUserContainer'
import { userDataMock } from '../../__tests__/mock'

describe('<CardUserContainer />', () => {
  it('should render CardUserContainer', () => {
    render(
      <CardUser userData={userDataMock}>
        <CardUserContainer>{userDataMock.name.first}</CardUserContainer>
      </CardUser>,
    )
    expect(screen.getByText(userDataMock.name.first)).toBeVisible()
  })

  it('should render CardUserContainer as short variant and selected', () => {
    render(
      <CardUser userData={userDataMock} cardStyle="short" $userSelected>
        <CardUserContainer role="button">
          {userDataMock.name.first}
        </CardUserContainer>
      </CardUser>,
    )
    expect(screen.getByText(userDataMock.name.first)).toBeVisible()
  })
})
