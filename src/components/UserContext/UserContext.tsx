import React, { createContext, FC, useContext, useMemo, useState } from 'react'

import { noop } from '../../helpers'

type TCUserContext = {
  currentUser: TUserData | null
  setCurrentUser: React.Dispatch<React.SetStateAction<TUserData | null>>
}

const CUserContext = createContext<TCUserContext>({
  currentUser: null,
  setCurrentUser: noop,
})

type TUserContext = {
  children: React.ReactNode
}

export const UserContext: FC<TUserContext> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<TUserData | null>(null)
  const context = useMemo(() => {
    return { currentUser, setCurrentUser }
  }, [currentUser, setCurrentUser])

  return (
    <CUserContext.Provider value={context}>{children}</CUserContext.Provider>
  )
}

export const useUserContext = () => useContext(CUserContext)
