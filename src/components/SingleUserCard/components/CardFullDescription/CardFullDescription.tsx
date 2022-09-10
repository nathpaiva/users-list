import React from 'react'

import styled from '@emotion/styled'

import { MEDIA } from '../../../../constants'
import { TSingleUserCard } from '../../type'

type TCardFullDescription = {
  userData: TSingleUserCard['userData']
  cardStyle: TSingleUserCard['cardStyle']
}

const CardFullProfile = styled.div`
  padding: 10px;
  background-color: var(--bg-c-light);
  color: var(--color-light);

  @media (min-width: ${MEDIA.mobile}) {
    padding: 20px;
  }
`

export const CardFullDescription: React.FC<TCardFullDescription> = ({
  userData,
  cardStyle,
}) => {
  if (cardStyle !== 'full') return null

  return (
    <CardFullProfile>
      <div>
        <strong>Gender:</strong> {userData.gender}
      </div>
      <div>
        <strong>Email:</strong> {userData.email}
      </div>
      <div>
        <strong>Username:</strong> {userData.login.username}
      </div>
      <div>
        <strong>DOB:</strong> {new Date(userData.dob.date).toLocaleDateString()}
      </div>
      <div>
        <strong>Phone:</strong> {userData.phone}
      </div>
    </CardFullProfile>
  )
}
