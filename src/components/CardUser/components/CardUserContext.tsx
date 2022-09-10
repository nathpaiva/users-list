import { createContext } from 'react'

type TCardUserContext = {
  userData?: TUserData
  cardStyle?: 'short' | 'full'
}

export const CardUserContext = createContext<TCardUserContext>({
  cardStyle: 'short',
})
