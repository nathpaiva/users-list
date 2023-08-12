/**
 * @vitest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'

import { CardUser } from '../CardUser'
import { userDataMock } from './mock'

const Dummy = () => <div>Dummy component</div>

Dummy.displayName = 'Dummy'

describe('<CardUser />', () => {
  it('should render CardUser', () => {
    render(
      <CardUser userData={userDataMock}>
        <CardUser.Image />
        <CardUser.Description>
          <p>{userDataMock.name.first}</p>
        </CardUser.Description>
        <CardUser.Detail>Card detail</CardUser.Detail>
      </CardUser>,
    )
    expect(
      screen.getByAltText(
        `profile of: ${userDataMock.name.first} ${userDataMock.name.last}`,
      ),
    ).toBeVisible()
    expect(screen.getByText(userDataMock.name.first)).toBeVisible()
  })
  it('should render CardUser without children', () => {
    render(
      <CardUser userData={userDataMock}>{'will not render' as any}</CardUser>,
    )
    expect(screen.queryByText('will not render')).toBeFalsy()
  })

  it('should render CardUser without children if is a invalid component', () => {
    render(
      <CardUser userData={userDataMock}>
        <Dummy />
      </CardUser>,
    )
    expect(screen.queryByText('Dummy component')).toBeFalsy()
  })
})
