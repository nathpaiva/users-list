import React from 'react'

import {
  useInfinityScroll,
  CardUser,
  useTabContext,
  useUserContext,
} from '../../components'

export const UserList = () => {
  const context = useUserContext()
  const tabContext = useTabContext()
  if (!context) return null
  const { setCurrentUser, currentUser } = context
  const { setCurrentTab } = tabContext

  const { data } = useInfinityScroll()

  return (
    <>
      {data.map((userData) => {
        const isCurrentUser = currentUser?.login.uuid === userData.login.uuid

        return (
          <CardUser
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
            className="cardUser-animate"
          >
            <CardUser.Image />
            <CardUser.Description>
              <p>
                {userData.name.first} ${userData.name.last}
              </p>
            </CardUser.Description>
          </CardUser>
        )
      })}
    </>
  )
}
