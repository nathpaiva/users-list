import React from 'react'

import { UserCard, useTabContext, useUserContext } from '../../components'

export const UserList = () => {
  const context = useUserContext()
  const tabContext = useTabContext()
  if (!context) return null
  const { userList, setCurrentUser, currentUser } = context
  const { setCurrentTab } = tabContext

  return (
    <>
      {userList.map((item) => {
        const isCurrentUser =
          JSON.stringify(currentUser) === JSON.stringify(item)
        return (
          <UserCard
            type="button"
            onClick={() => {
              setCurrentUser(item)
              setCurrentTab(1)
            }}
            key={item.login.uuid}
            as="button"
            userData={item}
            userSelected={isCurrentUser}
          />
        )
      })}
    </>
  )
}
