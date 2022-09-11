import React, { useMemo, useReducer } from 'react'

import { USERS_LOADED, USERS_LOADING, USER_BY_LOAD } from '../../constants'
import { InfinityScrollContext } from './InfinityScrollContext'
import { reducerInfinity } from './reduceInfinity'

type TInfinityScroll = {
  userData: TUserData[]
  children: React.ReactNode
}

export const InfinityScrollProvider: React.FC<TInfinityScroll> = ({
  userData,
  children,
}) => {
  const [state, dispatch] = useReducer(reducerInfinity, {
    isLoading: false,
    hasMoreUserToLoad: true,
    data: [],
    startParam: 0,
  })

  const { isLoading, hasMoreUserToLoad, data, startParam } = state
  const context = useMemo(() => {
    return { isLoading, hasMoreUserToLoad, data }
  }, [isLoading, hasMoreUserToLoad, data])

  //Update: If this function is only used by one component, it makes more sense
  //to locate it in that component, and just pass dispatch instead.
  const loadDataChunk = () => {
    dispatch({ type: USERS_LOADING } as TAction)

    //Simulate asynchronous request with setTimeout
    setTimeout(() => {
      //dummyData represents the entire data set.
      //What we want is a subset.
      //Initially, startParam is 0.
      //Thus startParam + itemsPerPage would be 10
      const dataChunk = userData.slice(startParam, startParam + USER_BY_LOAD)

      //Once we have the dataChunk, call dispatch again...
      //LOADED will cause the reducer to set isLoading: false.
      //Moreover, the payload/dataChunk will be added onto state.data
      //startParam will be adjusted accordingly
      //And isMore will be reevaluated.
      const payload = {
        length: userData.length,
        data: dataChunk,
      }
      dispatch({ type: USERS_LOADED, payload: payload })
    }, 1000)
  }

  return (
    <InfinityScrollContext.Provider value={{ ...context, loadDataChunk }}>
      {children}
    </InfinityScrollContext.Provider>
  )
}
