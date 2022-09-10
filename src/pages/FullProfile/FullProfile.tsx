import React from 'react'

import { UserCard, useUserContext } from '../../components'

export const FullProfile: React.FC = () => {
  const context = useUserContext()
  if (!context) return null
  const { currentUser } = context

  if (!currentUser) return <div tabIndex={0}>No current user selected</div>

  return <UserCard tabIndex={0} userData={currentUser} cardStyle="full" />
}
