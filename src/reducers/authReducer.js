import { authTypes } from "../types"

const initialState = {
  token: localStorage.getItem("token"),
  authenticated: null,
  user: null,
  message: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return {
        ...state,
        loading: action.payload,
      }
    case authTypes.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token)
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false,
      }
    case authTypes.GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      }
    case authTypes.LOGOUT:
    case authTypes.LOGIN_FAILURE:
      localStorage.removeItem("token")
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
