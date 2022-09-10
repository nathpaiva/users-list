import React from 'react'

import {
  Header,
  Loader,
  ResetCss,
  TabContext,
  TabPanel,
  UserContext,
} from '../components'
import { useFetch } from '../hooks'
import { FullProfile } from './FullProfile'
import { UserList } from './UserList'

export function Main() {
  const { userData, isLoading, errorMessage } = useFetch()

  if (isLoading) return <Loader />
  if (errorMessage) return <div>{errorMessage.error}</div>
  if (!userData.results) return <div>We couldn't load the user list</div>

  return (
    <>
      <ResetCss />

      <TabContext>
        <UserContext userList={userData.results}>
          <Header />

          <TabPanel index={0}>
            <UserList />
          </TabPanel>

          <TabPanel layout="grid:2" index={1}>
            <FullProfile />
          </TabPanel>
        </UserContext>
      </TabContext>
    </>
  )
}
