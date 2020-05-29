import { authTypes } from "../types"
import reduxUtils from "../utils/redux"

const initialState = {
  token: localStorage.getItem("token"),
  authenticated: null,
  user: null,
  error: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxUtils.getStartTypeOf(authTypes.GET_USER):
    case reduxUtils.getStartTypeOf(authTypes.LOGIN):
      return {
        ...state,
        loading: action.payload,
      }
    case reduxUtils.getSuccessTypeOf(authTypes.LOGIN):
      localStorage.setItem("token", action.payload.sessiontoken)
      return {
        ...state,
        user: action.payload.user,
        authenticated: true,
        loading: false,
      }
    case reduxUtils.getFailureTypeOf(authTypes.GET_USER):
      return {
        ...state,
        error: action.payload.response,
        loading: false,
      }
    case reduxUtils.getFailureTypeOf(authTypes.LOGIN):
      localStorage.removeItem("token")
      return {
        ...state,
        error: action.payload.response,
        loading: false,
      }
    case reduxUtils.getSuccessTypeOf(authTypes.GET_USER):
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case reduxUtils.getSuccessTypeOf(authTypes.LOGOUT):
      return initialState
    default:
      return state
  }
}
