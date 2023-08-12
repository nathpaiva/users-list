import { render } from '@testing-library/react'

import { CardUserContext } from '../CardUserContext'
import { userDataMock } from '../../__tests__/mock'

describe('<CardUserContext />', () => {
  it('should render CardUserContext', () => {
    const { getByText } = render(
      <CardUserContext.Provider
        value={{
          userData: userDataMock,
          cardStyle: 'full',
        }}
      >
        <div>{userDataMock.name.first}</div>
      </CardUserContext.Provider>,
    )
    expect(getByText(userDataMock.name.first)).toBeVisible()
  })
})
