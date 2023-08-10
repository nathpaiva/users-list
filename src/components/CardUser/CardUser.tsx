import React, {
  Children,
  KeyboardEvent,
  cloneElement,
  isValidElement,
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
  children: React.ReactNode[]
  userData: TUserData
  cardStyle?: 'short' | 'full'
  userSelected?: boolean
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
  userSelected = false,
  className,
  ...restProps
}: TCardUserCompound) => {
  const childByScope = {
    userCard: [] as React.ReactNode[],
    fullProfile: [] as React.ReactNode[],
  }
  // TODO review this type
  Children.forEach(children, (child: any, index) => {
    if (!child && !isValidElement(child)) return null

    // in case the dev tries to render the a invalid element
    if (!child.type && !isValidElement(child)) {
      console.warn('Invalid component: ', child)
      return null
    }

    /**
     * split components to render in the correct position
     */
    if (
      child.type.displayName === 'CardImage' ||
      child.type.displayName === 'CardDescription'
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
        // TODO change this type
        key: `full-profile-detail-${index as any}`,
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
        userSelected={userSelected}
        className={className}
        {...restProps}
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
