type TCommon = {
  data: TUserData[]
  isLoading: boolean
  hasMoreUserToLoad: boolean
}
type TInfinityScrollContext = TCommon & {
  loadMoreItems: React.DispatchWithoutAction
}
type TState = TCommon & {
  startParam: number
}

type TReduceTypes = 'USERS_LOADING' | 'USERS_LOADED'

type TAction = {
  type: TReduceTypes
  payload: {
    data: TUserData[]
    length: number
  }
}

type TInfinityScrollControl = {
  loadingMessage?: string
  dataEndMessage?: string
}
