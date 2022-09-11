import React from 'react'

import {
  Header,
  InfinityScrollProvider,
  Loader,
  GlobalCss,
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
  if (!userData.results) return <div>We cound&rsquo;t load the user list</div>

  return (
    <>
      <GlobalCss />
      {/* responsible to manager the Tab state */}
      <TabContext>
        {/* responsible to manager the current user */}
        <UserContext>
          <Header />

          <TabPanel index={0}>
            {/* responsible to return the list user data */}
            <InfinityScrollProvider userData={userData.results}>
              <UserList />
            </InfinityScrollProvider>
          </TabPanel>

          <TabPanel layout="grid:2" index={1} tabindex="0">
            <FullProfile />
          </TabPanel>
        </UserContext>
      </TabContext>
    </>
  )
}
