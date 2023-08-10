import React from 'react'

import { CardUser, useUserContext } from '../../components'

export const FullProfile: React.FC = () => {
  const context = useUserContext()
  if (!context) return null
  const { currentUser } = context

  if (!currentUser) return <div>No current user selected</div>

  return (
    <CardUser
      className="fullProfile-animate"
      userData={currentUser}
      cardStyle="full"
    >
      <CardUser.Image tabIndex={0} />
      <CardUser.Description tabIndex={0}>
        <p>
          {currentUser.name.first} ${currentUser.name.last}
        </p>
        <p>{`${currentUser.name.title}. ${currentUser.name.first} ${currentUser.name.last}`}</p>
        <p>{`${currentUser.location.street.number} ${currentUser.location.street.name}`}</p>
        <p>{`${currentUser.location.city}, ${currentUser.location.state} ${currentUser.location.postcode}`}</p>
        <p>{` ${currentUser.location.country}`}</p>
      </CardUser.Description>

      <CardUser.Detail tabIndex={0}>
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
      </CardUser.Detail>
    </CardUser>
  )
}
