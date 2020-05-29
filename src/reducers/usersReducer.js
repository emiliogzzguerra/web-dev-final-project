import { userTypes } from "../types"
import reduxUtils from "../utils/redux"

const initialState = {
  users: [],
  modalVisibility: false,
  error: null,
  loading: false,
  targetUser: null,
  readyForRefresh: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case reduxUtils.getSetVisibilityOfModalFormTypeOf(userTypes.USER_CREATE):
      return {
        ...state,
        modalVisibility: action.payload,
      }
    case reduxUtils.getStartTypeOf(userTypes.USER_DELETE):
    case reduxUtils.getStartTypeOf(userTypes.USER_UPDATE):
      return {
        ...state,
        loading: true,
        targetUser: action.payload,
      }
    case reduxUtils.getStartTypeOf(userTypes.USER_CREATE):
    case reduxUtils.getStartTypeOf(userTypes.USER_FETCH):
      return {
        ...state,
        loading: action.payload,
      }
    case reduxUtils.getFailureTypeOf(userTypes.USER_CREATE):
    case reduxUtils.getFailureTypeOf(userTypes.USER_UPDATE):
    case reduxUtils.getFailureTypeOf(userTypes.USER_FETCH):
    case reduxUtils.getFailureTypeOf(userTypes.USER_DELETE):
      return {
        ...state,
        loading: false,
        error: action.payload,
        targetUser: null,
        readyForRefresh: false,
      }
    case reduxUtils.getSuccessTypeOf(userTypes.USER_CREATE):
      return {
        ...state,
        loading: false,
        modalVisibility: false,
        users: [...state.users, action.payload],
        readyForRefresh: true,
      }
    case reduxUtils.getSuccessTypeOf(userTypes.USER_FETCH):
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case reduxUtils.getSuccessTypeOf(userTypes.USER_UPDATE):
      return {
        ...state,
        loading: false,
        users: state.users.map((user) =>
          user._id === state.targetUser ? (user = action.payload) : user
        ),
        modalVisibility: false,
        targetUser: null,
        readyForRefresh: true,
      }
    case reduxUtils.getSuccessTypeOf(userTypes.USER_DELETE):
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user._id !== state.targetUser),
        readyForRefresh: true,
      }

    default:
      return state
  }
}
