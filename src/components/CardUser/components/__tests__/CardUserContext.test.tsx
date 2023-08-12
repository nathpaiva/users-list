import { render, screen } from '@testing-library/react'

import { CardUserContext } from '../CardUserContext'
import { userDataMock } from '../../__tests__/mock'

describe('<CardUserContext />', () => {
  it('should render CardUserContext', () => {
    render(
      <CardUserContext.Provider
        value={{
          userData: userDataMock,
          cardStyle: 'full',
        }}
      >
        <div>{userDataMock.name.first}</div>
      </CardUserContext.Provider>,
    )
    expect(screen.getByText(userDataMock.name.first)).toBeVisible()
  })
})
