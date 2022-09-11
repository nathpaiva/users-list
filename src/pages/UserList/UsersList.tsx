import React from 'react'

import { CardUser, useTabContext, useUserContext } from '../../components'
import { useInfinityScroll } from '../../components/InfinityScroll/useInityScroll'

export const UserList = () => {
  const context = useUserContext()
  const tabContext = useTabContext()
  if (!context) return null
  const { setCurrentUser, currentUser } = context
  const { setCurrentTab } = tabContext

  const { data, isLoading, hasMoreUserToLoad, setElement } = useInfinityScroll()

  return (
    <>
      {data.map((userData, index) => {
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
            index={index}
            className="animate"
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

      {isLoading && <h3>Loading. . .</h3>}
      {!isLoading && hasMoreUserToLoad && <div ref={setElement} />}
      {!hasMoreUserToLoad && <h3>No users to load!</h3>}
    </>
  )
}
