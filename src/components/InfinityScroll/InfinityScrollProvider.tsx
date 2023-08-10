import { useContext, useMemo, useReducer, useCallback, ReactNode } from 'react'

import { USERS_LOADED, USERS_LOADING, USER_BY_LOAD } from '../../constants'
import { InfinityScrollControl } from './InfinityScrollControl'
import { reducerInfinity } from './reduceInfinity'
import { InfinityScrollContext } from './InfinityScrollContext'

type TInfinityScroll = TInfinityScrollControl & {
  userData: TUserData[]
  children: ReactNode
}

export const InfinityScrollProvider = ({
  userData,
  children,
  dataEndMessage,
  loadingMessage,
}: TInfinityScroll) => {
  const [{ isLoading, hasMoreUserToLoad, data, startParam }, dispatch] =
    useReducer(reducerInfinity, {
      isLoading: false,
      hasMoreUserToLoad: true,
      data: [],
      startParam: 0,
    })

  const context = useMemo(() => {
    return { isLoading, hasMoreUserToLoad, data }
  }, [isLoading, hasMoreUserToLoad, data])

  const loadMoreItems = useCallback(() => {
    /**
     * call the dispatch with USERS_LOADING and the reduce
     * will update the isLoading to `true`
     */
    dispatch({ type: USERS_LOADING } as TAction)

    /**
     * add a loader effect
     */
    setTimeout(() => {
      /**
       * userData is entire the user list
       * we want to to return a partial data to avoid a bad performance
       * init with startParam 0
       * so startParam + USER_BY_LOAD = 20
       */
      const dataChunk = userData.slice(startParam, startParam + USER_BY_LOAD)

      /**
       * once we get the dataChunk update we call the dispatch
       * with USERS_LOADED and the reduce will update the isLoading to `false`
       * the payload is an object and has the dataChunk value on data key
       * and the userData size on length key
       * the startParam will adjusted based on data length
       * and the hasMoreUserToLoad will be updated based on startParam value and the payload.length
       */
      const payload = {
        length: userData.length,
        data: dataChunk,
      }
      dispatch({ type: USERS_LOADED, payload })
    }, 1000)
  }, [startParam, userData])

  const providerProps = useMemo(
    () => ({
      isLoading: context.isLoading,
      data: context.data,
      hasMoreUserToLoad: context.hasMoreUserToLoad,
      loadMoreItems,
    }),
    [context.isLoading, context.data, context.hasMoreUserToLoad, loadMoreItems],
  )

  return (
    <InfinityScrollContext.Provider value={providerProps}>
      {children}
      <InfinityScrollControl
        dataEndMessage={dataEndMessage}
        loadingMessage={loadingMessage}
      />
    </InfinityScrollContext.Provider>
  )
}

export const useInfinityScrollContext = () => useContext(InfinityScrollContext)
