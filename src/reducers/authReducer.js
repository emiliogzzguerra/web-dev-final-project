import { authTypes } from "../types"
import reduxUtils from "../utils/redux"

const initialState = {
  token: localStorage.getItem("token"),
  authenticated: null,
  user: null,
  message: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxUtils.getStartTypeOf(authTypes.LOGIN):
      return {
        ...state,
        loading: action.payload,
      }
    case reduxUtils.getSuccessTypeOf(authTypes.LOGIN):
      localStorage.setItem("token", action.payload.sessiontoken)
      return {
        ...state,
        authenticated: true,
        loading: false,
      }
    case reduxUtils.getFailurePayloadOf(authTypes.LOGIN):
      localStorage.removeItem("token")
      return initialState
    case reduxUtils.getSuccessTypeOf(authTypes.LOGOUT):
      return initialState
    default:
      return state
  }
}
