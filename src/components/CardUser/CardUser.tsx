import React, { useContext, Children } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { MEDIA } from '../../constants'
import { CardUserContext } from './components/CardUserContext'

type TCardPicture = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  userSelected: boolean
}

export const CardUser = styled.div<TCardPicture>`
  ${({ userSelected }) => {
    const { cardStyle } = useContext(CardUserContext)

    return css`
      --bg-color-style: ${cardStyle === 'short'
        ? 'var(--bg-c-light)'
        : 'var(--bg-c-dark)'};
      --color: ${cardStyle === 'short'
        ? 'var(--color-dark)'
        : 'var(--color-light)'};
      --pd-top: ${cardStyle === 'short' ? '20px' : '10px'};
      --flex-dir: ${cardStyle === 'short' ? 'row' : 'column'};

      --bg-color: ${userSelected ? 'red' : 'var(--bg-color-style)'};
      --bg-color-hover: ${cardStyle === 'short' ? 'orange' : 'var(--bg-color)'};
    `
  }}

  background-color: var(--bg-color);
  color: var(--color);
  padding: 10px 10px 10px;
  transition: background-color 0.2s ease-out 100ms;

  .card-bio {
    &__image {
      width: 100%;
    }
  }

  &:hover,
  &:focus {
    background-color: var(--bg-color-hover);
  }
`

const CardImage = (props: any) => {
  const { userData } = useContext(CardUserContext)
  if (!userData) return null

  return (
    <picture>
      <source
        media={`(max-width: ${MEDIA.tablet})`}
        srcSet={userData.picture.medium}
      />
      <source
        media={`(max-width: ${MEDIA.desktop})`}
        srcSet={userData.picture.large}
      />

      <img
        src={userData.picture.large}
        alt={`Image profile of: ${userData.name.first} ${userData.name.last}`}
        className="card-bio__image"
        loading="lazy"
        decoding="async"
        {...props}
      />
    </picture>
  )
}
CardImage.displayName = 'CardImage'

const CardDescriptionStyle = styled.div`
  display: flex;
  justify-content: center;

  padding-top: var(--pd-top);
  flex-direction: var(--flex-dir);
`
// create as a component to have access of the component Name
const CardDescription = (props: any) => <CardDescriptionStyle {...props} />
CardDescription.displayName = 'CardDescription'

const CardFullProfile = styled.div`
  padding: 10px;
  background-color: var(--bg-c-light);
  color: var(--color-light);

  @media (min-width: ${MEDIA.mobile}) {
    padding: 20px;
  }
`

// create as a component to have access of the component Name
const CardDetail = (props: any) => <CardFullProfile {...props} />
CardDetail.displayName = 'CardDetail'

type TCardUser = typeof CardUser

export type TCardUserCompound = TCardUser['__emotion_styles'] & {
  children: React.ReactNode[]
  userData: TUserData
  cardStyle?: 'short' | 'full'
  userSelected: boolean
}

export const CardUserContainer = ({
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
    const {
      type: { name },
    } = child

    if (name === 'CardImage' || name === 'CardDescription') {
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
      <CardUser userSelected={userSelected} {...props}>
        {childByScope.userCard}
      </CardUser>

      {!!childByScope.fullProfile.length && childByScope.fullProfile}
    </CardUserContext.Provider>
  )
}

CardUserContainer.Image = CardImage
CardUserContainer.Description = CardDescription
CardUserContainer.Detail = CardDetail
