import {
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
  Children,
  cloneElement,
  useMemo,
} from 'react'
import {
  CardDescription,
  CardDetail,
  CardImage,
  CardUserContainer,
  CardUserContext,
} from './components'

export type TCardUserCompound = {
  children: ReactElement[] | ReactElement
  userData: TUserData
  cardStyle?: 'short' | 'full'
  $userSelected?: boolean
  className?: string
  tabIndex?: number
  role?: string
  onKeyDown?: (event: KeyboardEvent<Element>) => void
  onClick?: () => void
}

export const CardUser = ({
  userData,
  children,
  cardStyle,
  $userSelected = false,
  className,
  tabIndex,
  role,
  onClick,
  onKeyDown,
}: TCardUserCompound) => {
  const childByScope = {
    userCard: [] as ReactNode[],
    fullProfile: [] as ReactNode[],
  }

  Children.forEach(children, (child) => {
    if (
      typeof child === 'number' ||
      typeof child === 'string' ||
      typeof child === 'boolean'
    )
      return null

    // in case the dev tries to render the a invalid element
    if (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (child.type as any).displayName !== 'CardImage' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (child.type as any).displayName !== 'CardDescription' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (child.type as any).displayName !== 'CardDetail' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (child.type as any).displayName !== 'CardUserContainer'
    ) {
      console.warn('Invalid component: ', child)
      return null
    }

    /**
     * split components to render in the correct position
     */
    if (
      // TODO: find how to check the child type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (child.type as any).displayName === 'CardImage' ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (child.type as any).displayName === 'CardDescription'
    ) {
      childByScope.userCard.push(child)
      return null
    }

    /**
     * adds class in the detail content to animate the container
     */
    return childByScope.fullProfile.push(
      cloneElement(child, {
        className,
        key: child.key,
        ...child.props,
      }),
    )
  })

  const providerProps = useMemo(
    () => ({
      userData,
      cardStyle,
    }),
    [userData, cardStyle],
  )

  return (
    <CardUserContext.Provider value={providerProps}>
      <CardUserContainer
        $userSelected={$userSelected}
        className={className}
        tabIndex={tabIndex}
        role={role}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        {childByScope.userCard}
      </CardUserContainer>

      {!!childByScope.fullProfile.length && childByScope.fullProfile}
    </CardUserContext.Provider>
  )
}

CardUser.Image = CardImage
CardUser.Description = CardDescription
CardUser.Detail = CardDetail
