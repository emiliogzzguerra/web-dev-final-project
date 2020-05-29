import { userTypes } from "../types"
import reduxUtils from "../utils/redux"

const initialState = {
  users: [],
  modalVisibility: false,
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case reduxUtils.getSetVisibilityOfModalFormTypeOf(userTypes.USER_CREATE):
      return {
        ...state,
        modalVisibility: action.payload,
      }
    case reduxUtils.getStartTypeOf(userTypes.USER_FETCH):
    case reduxUtils.getStartTypeOf(userTypes.USER_DELETE):
    case reduxUtils.getStartTypeOf(userTypes.USER_CREATE):
      return {
        ...state,
        loading: action.payload,
      }
    case reduxUtils.getFailureTypeOf(userTypes.USER_FETCH):
    case reduxUtils.getFailureTypeOf(userTypes.USER_DELETE):
    case reduxUtils.getFailureTypeOf(userTypes.USER_CREATE):
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case reduxUtils.getSuccessTypeOf(userTypes.USER_CREATE):
      return {
        ...state,
        loading: false,
        modalVisibility: false,
        users: [...state.users, action.payload],
      }
    case reduxUtils.getSuccessTypeOf(userTypes.USER_FETCH):
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case reduxUtils.getSuccessTypeOf(userTypes.USER_DELETE):
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
