import React, { createContext, FC, useContext, useMemo, useState } from 'react'

import { noop } from '../../helpers'

type TCTabContext = {
  currentTab: number
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>
}

const CTabContext = createContext<TCTabContext>({
  currentTab: 0,
  setCurrentTab: noop,
})

type TTabContext = {
  children: React.ReactNode
}

export const TabProvider: FC<TTabContext> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<TCTabContext['currentTab']>(0)
  const context = useMemo(() => {
    return { currentTab, setCurrentTab }
  }, [currentTab, setCurrentTab])

  return <CTabContext.Provider value={context}>{children}</CTabContext.Provider>
}

export const useTabContext = () => useContext(CTabContext)
