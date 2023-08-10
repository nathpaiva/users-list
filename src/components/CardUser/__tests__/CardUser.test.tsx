import { render, screen } from '@testing-library/react'

import { CardUser } from '../CardUser'
import { userDataMock } from './mock'

describe('<CardImage />', () => {
  it('should render CardImage', () => {
    render(
      <CardUser userData={userDataMock}>
        <CardUser.Image />
        <CardUser.Description>
          <p>{userDataMock.name.first}</p>
        </CardUser.Description>
      </CardUser>,
    )
    expect(
      screen.getByAltText(
        `profile of: ${userDataMock.name.first} ${userDataMock.name.last}`,
      ),
    ).toBeVisible()
    expect(screen.getByText(userDataMock.name.first)).toBeVisible()
  })
})
