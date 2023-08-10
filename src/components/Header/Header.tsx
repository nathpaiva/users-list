import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

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
    <AppBar position="static">
      <Tabs value={currentTab} onChange={(_, newTab) => setCurrentTab(newTab)}>
        <Tab label="Users" />
        <Tab label={`Selected User - ${quantityUser}`} />
      </Tabs>
    </AppBar>
  )
}
