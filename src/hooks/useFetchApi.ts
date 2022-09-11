import { useState, useEffect } from 'react'

import { USERS_BY_PAGE } from '../constants'

type ErrorState =
  | {
      error?: string
    }
  | undefined

interface IState {
  userData: DataResponse
  isLoading: boolean
  errorMessage: ErrorState
}

type DataResponse = {
  info?: {
    page: number
    results: number
    seed: string
    version: string
  }
  results?: TUserData[]
}

export const useFetch = (): IState => {
  const [data, setData] = useState<DataResponse>({})
  const [apiERROR, setApiERROR] = useState<ErrorState>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!isLoading) return
    if (apiERROR) {
      setApiERROR(apiERROR)
      return
    }

    async function apiCall() {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=${USERS_BY_PAGE}`,
        )
        const results = await response.json()
        setIsLoading((isLoading) => !isLoading)
        setApiERROR(results.message)
        setData(results)
      } catch (error) {
        setData({})
        setIsLoading((isLoading) => !isLoading)
        setApiERROR(error as ErrorState)
      }
    }

    apiCall()
  }, [])

  return { userData: data, isLoading, errorMessage: apiERROR }
}
