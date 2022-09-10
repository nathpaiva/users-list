import React, { createContext, FC, useContext, useMemo, useState } from 'react'

type TCUserContext = {
  currentUser: TUserData | null
  userList: TUserData[]
  setCurrentUser: React.Dispatch<React.SetStateAction<TUserData | null>>
}

const CUserContext = createContext<TCUserContext>({
  currentUser: null,
  userList: [],
  setCurrentUser: () => {},
})

type TUserContext = {
  userList: TUserData[]
  children: React.ReactNode
}

export const UserContext: FC<TUserContext> = ({ userList, children }) => {
  const [currentUser, setCurrentUser] = useState<TUserData | null>(null)
  const context = useMemo(() => {
    return { currentUser, userList, setCurrentUser }
  }, [currentUser, userList, setCurrentUser])

  return (
    <CUserContext.Provider value={context}>{children}</CUserContext.Provider>
  )
}

export const useUserContext = () => useContext(CUserContext)
