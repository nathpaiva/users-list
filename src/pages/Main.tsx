import {
  Header,
  InfinityScrollProvider,
  GlobalCss,
  TabProvider,
  TabPanel,
  UserProvider,
  GlobalErrorMessage,
  GlobalLoader,
} from '../components'
import { useFetch } from '../hooks'
import { FullProfile } from './FullProfile'
import { UserList } from './UserList'

export function Main() {
  const { userData, isLoading, errorMessage } = useFetch()

  if (isLoading) {
    return <GlobalLoader />
  }
  if (errorMessage?.error) {
    return <GlobalErrorMessage error={errorMessage.error} />
  }
  if (!userData.results) {
    return <GlobalErrorMessage error="We cound&rsquo;t load the user list" />
  }

  return (
    <>
      <GlobalCss />
      {/* responsible to manager the Tab state */}
      <TabProvider>
        {/* responsible to manager the current user */}
        <UserProvider>
          <Header />

          <TabPanel index={0}>
            {/* responsible to return the list user data */}
            <InfinityScrollProvider
              userData={userData.results}
              dataEndMessage="No users to load!"
              loadingMessage="Loading..."
            >
              <UserList />
            </InfinityScrollProvider>
          </TabPanel>

          <TabPanel layout="grid:2" index={1} tabindex="0">
            <FullProfile />
          </TabPanel>
        </UserProvider>
      </TabProvider>
    </>
  )
}
