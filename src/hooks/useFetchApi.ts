import { useState, useEffect } from 'react'

import { USERS_BY_PAGE } from '../constants'

type TryCatchErrorFormat = {
  message: string
}

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
        const apiResponse = await fetch(
          `https://randomuser.me/api/?results=${USERS_BY_PAGE}`,
        )

        const response = await apiResponse.json()

        setIsLoading((_isLoading) => !_isLoading)
        setApiERROR(undefined)
        setData(response)
      } catch (error) {
        setData({})
        setIsLoading((_isLoading) => !_isLoading)
        setApiERROR(() => ({
          error: `${
            (error as TryCatchErrorFormat).message
          }, please try again later.`,
        }))
      }
    }

    apiCall()
  }, [apiERROR, isLoading])

  return { userData: data, isLoading, errorMessage: apiERROR }
}
