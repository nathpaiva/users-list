import React from 'react'

import {
  CardUserContainer,
  useTabContext,
  useUserContext,
} from '../../components'

export const UserList = () => {
  const context = useUserContext()
  const tabContext = useTabContext()
  if (!context) return null
  const { userList, setCurrentUser, currentUser } = context
  const { setCurrentTab } = tabContext

  return (
    <>
      {userList.map((userData, index) => {
        const isCurrentUser =
          JSON.stringify(currentUser) === JSON.stringify(userData)

        return (
          <CardUserContainer
            key={userData.login.uuid}
            userData={userData}
            cardStyle="short"
            userSelected={isCurrentUser}
            as="button"
            type="button"
            onClick={() => {
              setCurrentUser(userData)
              setCurrentTab(1)
            }}
            index={index}
          >
            <CardUserContainer.Image />
            <CardUserContainer.Description>
              <p>
                {userData.name.first} ${userData.name.last}
              </p>
            </CardUserContainer.Description>
          </CardUserContainer>
        )
      })}
    </>
  )
}
