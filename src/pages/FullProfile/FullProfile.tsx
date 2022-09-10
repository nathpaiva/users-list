import React from 'react'

import { CardUserContainer, useUserContext } from '../../components'

export const FullProfile: React.FC = () => {
  const context = useUserContext()
  if (!context) return null
  const { currentUser } = context

  if (!currentUser) return <div tabIndex={0}>No current user selected</div>

  return (
    <CardUserContainer userData={currentUser} cardStyle="full">
      <CardUserContainer.Image tabIndex="0" />
      <CardUserContainer.Description tabIndex="0">
        <p>
          {currentUser.name.first} ${currentUser.name.last}
        </p>
        <p>{`${currentUser.name.title}. ${currentUser.name.first} ${currentUser.name.last}`}</p>
        <p>{`${currentUser.location.street.number} ${currentUser.location.street.name}`}</p>
        <p>{`${currentUser.location.city}, ${currentUser.location.state} ${currentUser.location.postcode}`}</p>
        <p>{` ${currentUser.location.country}`}</p>
      </CardUserContainer.Description>

      <CardUserContainer.Detail tabIndex="0">
        <p>
          <strong>Gender: </strong> {currentUser.gender}
        </p>
        <p>
          <strong>Email: </strong> {currentUser.email}
        </p>
        <p>
          <strong>Username: </strong> {currentUser.login.username}
        </p>
        <p>
          <strong>DOB: </strong>{' '}
          {new Date(currentUser.dob.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Phone: </strong> {currentUser.phone}
        </p>
      </CardUserContainer.Detail>
    </CardUserContainer>
  )
}
