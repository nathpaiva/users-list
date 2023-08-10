import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'

import { noop } from '../../helpers'

type TCTabContext = {
  currentTab: number
  setCurrentTab: Dispatch<SetStateAction<number>>
}

const CTabContext = createContext<TCTabContext>({
  currentTab: 0,
  setCurrentTab: noop,
})

type TTabContext = {
  children: ReactNode
}

export const TabProvider = ({ children }: TTabContext) => {
  const [currentTab, setCurrentTab] = useState<TCTabContext['currentTab']>(0)
  const context = useMemo(() => {
    return { currentTab, setCurrentTab }
  }, [currentTab, setCurrentTab])

  return <CTabContext.Provider value={context}>{children}</CTabContext.Provider>
}

export const useTabContext = () => useContext(CTabContext)
