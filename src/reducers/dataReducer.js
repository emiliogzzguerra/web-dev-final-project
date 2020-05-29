import { dataTypes } from "../types"
import reduxUtils from "../utils/redux"

const initialState = {
  data: [],
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case reduxUtils.getStartTypeOf(dataTypes.DATA_FETCH):
      return {
        ...state,
        loading: true,
      }
    case reduxUtils.getFailureTypeOf(dataTypes.DATA_FETCH):
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case reduxUtils.getSuccessTypeOf(dataTypes.DATA_FETCH):
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    default:
      return state
  }
}
