import { render, screen } from '@testing-library/react'

import { CardUser } from '../../CardUser'
import { userDataMock } from '../../__tests__/mock'

describe('<CardImage />', () => {
  it('should render CardImage', () => {
    render(
      <CardUser userData={userDataMock}>
        <CardUser.Image />
      </CardUser>,
    )
    expect(
      screen.getByAltText(
        `profile of: ${userDataMock.name.first} ${userDataMock.name.last}`,
      ),
    ).toBeVisible()
  })

  it('should render not render CardImage if userData is undefined', () => {
    render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <CardUser userData={undefined as any}>
        <CardUser.Image />
      </CardUser>,
    )
    expect(
      screen.queryByAltText(
        `profile of: ${userDataMock.name.first} ${userDataMock.name.last}`,
      ),
    ).toBeFalsy()
  })
})
