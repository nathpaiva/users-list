import React, { useContext } from 'react'

import { MEDIA } from '../../../constants'
import { CardUserContext } from './CardUserContext'

export const CardImage: React.FC<CardCommonProps> = ({ tabIndex }) => {
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
        tabIndex={tabIndex}
      />
    </picture>
  )
}
CardImage.displayName = 'CardImage'
