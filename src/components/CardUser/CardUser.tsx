import React, { Children, isValidElement } from 'react'

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
  ...props
}: TCardUserCompound) => {
  const childByScope = {
    userCard: [] as React.ReactNode[],
    fullProfile: [] as React.ReactNode[],
  }
  Children.forEach(children, (child) => {
    // in case the dev tries to render the a invalid element
    if (!child.type && !isValidElement(child))
      return console.warn('Invalid component: ', child)

    if (
      child.type.name === 'CardImage' ||
      child.type.name === 'CardDescription'
    ) {
      childByScope.userCard.push(child)
      return
    }

    childByScope.fullProfile.push(child)
  })

  return (
    <CardUserContext.Provider
      value={{
        userData,
        cardStyle,
      }}
    >
      <CardUserContainer userSelected={userSelected} {...props}>
        {childByScope.userCard}
      </CardUserContainer>

      {!!childByScope.fullProfile.length && childByScope.fullProfile}
    </CardUserContext.Provider>
  )
}

CardUser.Image = CardImage
CardUser.Description = CardDescription
CardUser.Detail = CardDetail
