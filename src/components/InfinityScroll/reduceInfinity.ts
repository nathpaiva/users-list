import { USERS_LOADED, USERS_LOADING } from '../../constants'

export const reducerInfinity = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case USERS_LOADED: {
      const startParam = state.startParam + action.payload.data.length
      return {
        ...state,
        isLoading: false,
        data: [...state.data, ...action.payload.data],
        startParam: startParam,
        hasMoreUserToLoad: startParam !== action.payload.length,
      }
    }
    default:
      throw new Error('Action not found')
  }
}
