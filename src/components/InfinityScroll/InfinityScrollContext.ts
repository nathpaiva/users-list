import { createContext } from 'react'
import { noop } from '../../helpers'

export const InfinityScrollContext = createContext<TInfinityScrollContext>({
  data: [],
  hasMoreUserToLoad: true,
  isLoading: false,
  loadMoreItems: noop,
})
