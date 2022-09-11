import React, { createContext, FC, useContext, useMemo, useState } from 'react'

import { noop } from '../../helpers'

type TUserContext = {
  currentUser: TUserData | null
  setCurrentUser: React.Dispatch<React.SetStateAction<TUserData | null>>
}

const CUserContext = createContext<TUserContext>({
  currentUser: null,
  setCurrentUser: noop,
})

type TUserProvider = {
  children: React.ReactNode
}

export const UserProvider: FC<TUserProvider> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<TUserData | null>(null)
  const context = useMemo(() => {
    return { currentUser, setCurrentUser }
  }, [currentUser, setCurrentUser])

  return (
    <CUserContext.Provider value={context}>{children}</CUserContext.Provider>
  )
}

export const useUserContext = () => useContext(CUserContext)
