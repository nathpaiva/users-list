import { Tabs, Tab } from '@nextui-org/react'

import { useTabContext } from '../TabProvider'
import { useUserContext } from '../UserProvider'

export const Header = () => {
  const context = useTabContext()
  const userContext = useUserContext()
  if (!context && !userContext) return null
  const { currentTab, setCurrentTab } = context

  const { currentUser } = userContext
  const quantityUser = !currentUser ? 0 : 1

  return (
    <div>
      <Tabs
        selectedKey={currentTab}
        onSelectionChange={(newTab) => {
          setCurrentTab(newTab)
        }}
      >
        <Tab title="Users" />
        <Tab title={`Selected User - ${quantityUser}`} />
      </Tabs>
    </div>
  )
}
