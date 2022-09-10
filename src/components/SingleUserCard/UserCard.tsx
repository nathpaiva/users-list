import React, { FC } from 'react'

import { CardFullDescription, CardPicture } from './components'
import { TSingleUserCard } from './type'

export const UserCard: FC<TSingleUserCard> = ({
  userData,
  cardStyle = 'short',
  userSelected = false,
  ...restProps
}) => (
  <>
    <CardPicture
      cardStyle={cardStyle}
      userData={userData}
      userSelected={userSelected}
      {...restProps}
    />

    <CardFullDescription cardStyle={cardStyle} userData={userData} />
  </>
)
