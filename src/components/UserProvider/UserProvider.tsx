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

type TUserContext = {
  currentUser: TUserData | null
  setCurrentUser: Dispatch<SetStateAction<TUserData | null>>
}

const CUserContext = createContext<TUserContext>({
  currentUser: null,
  setCurrentUser: noop,
})

type TUserProvider = {
  children: ReactNode
}

export const UserProvider = ({ children }: TUserProvider) => {
  const [currentUser, setCurrentUser] = useState<TUserData | null>(null)
  const context = useMemo(() => {
    return { currentUser, setCurrentUser }
  }, [currentUser, setCurrentUser])

  return (
    <CUserContext.Provider value={context}>{children}</CUserContext.Provider>
  )
}

export const useUserContext = () => useContext(CUserContext)
