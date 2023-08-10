import React, { Children, cloneElement, isValidElement } from 'react'

import {
  CardDescription,
  CardDetail,
  CardImage,
  CardUserContainer,
  CardUserContext,
} from './components'

type TCardUser = typeof CardUserContainer

export type TCardUserCompound = TCardUser['__emotion_styles'] & {
  children: React.ReactNode[]
  userData: TUserData
  cardStyle?: 'short' | 'full'
  userSelected: boolean
}

export const CardUser = ({
  userData,
  children,
  cardStyle,
  userSelected,
  className,
  ...props
}: TCardUserCompound) => {
  const childByScope = {
    userCard: [] as React.ReactNode[],
    fullProfile: [] as React.ReactNode[],
  }
  Children.forEach(children, (child, index) => {
    // in case the dev tries to render the a invalid element
    if (!child.type && !isValidElement(child))
      return console.warn('Invalid component: ', child)

    /**
     * split components to render in the correct position
     */
    if (
      child.type.displayName === 'CardImage' ||
      child.type.displayName === 'CardDescription'
    ) {
      childByScope.userCard.push(child)
      return
    }

    /**
     * adds class in the detail content to animate the container
     */
    childByScope.fullProfile.push(
      cloneElement(child, {
        className,
        key: `full-profile-detail-${index}`,
        ...child.props,
      }),
    )
  })

  return (
    <CardUserContext.Provider
      value={{
        userData,
        cardStyle,
      }}
    >
      <CardUserContainer
        userSelected={userSelected}
        className={className}
        {...props}
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
