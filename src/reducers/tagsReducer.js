import { tagTypes } from "../types"
import reduxUtils from "../utils/redux"

const initialState = {
  tags: [],
  modalVisibility: false,
  error: null,
  loading: false,
  targetTag: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case reduxUtils.getSetVisibilityOfModalFormTypeOf(tagTypes.TAG_CREATE):
      return {
        ...state,
        modalVisibility: action.payload,
      }
    case reduxUtils.getStartTypeOf(tagTypes.TAG_CREATE):
    case reduxUtils.getStartTypeOf(tagTypes.TAG_FETCH):
      return {
        ...state,
        loading: action.payload,
      }
    case reduxUtils.getStartTypeOf(tagTypes.TAG_DELETE):
    case reduxUtils.getStartTypeOf(tagTypes.TAG_UPDATE):
      return {
        ...state,
        loading: true,
        targetTag: action.payload,
      }
    case reduxUtils.getFailureTypeOf(tagTypes.TAG_CREATE):
    case reduxUtils.getFailureTypeOf(tagTypes.TAG_UPDATE):
    case reduxUtils.getFailureTypeOf(tagTypes.TAG_FETCH):
    case reduxUtils.getFailureTypeOf(tagTypes.TAG_DELETE):
      return {
        ...state,
        loading: false,
        error: action.payload,
        targetTag: null,
      }
    case reduxUtils.getSuccessTypeOf(tagTypes.TAG_CREATE):
      return {
        ...state,
        loading: false,
        modalVisibility: false,
        tags: [...state.tags, action.payload],
      }
    case reduxUtils.getSuccessTypeOf(tagTypes.TAG_FETCH):
      return {
        ...state,
        loading: false,
        tags: action.payload,
      }
    case reduxUtils.getSuccessTypeOf(tagTypes.TAG_UPDATE):
      return {
        ...state,
        loading: false,
        tags: state.tags.map((tag) =>
          tag._id === state.targetTag ? (tag = action.payload) : tag
        ),
        modalVisibility: false,
        targetTag: null,
      }
    case reduxUtils.getSuccessTypeOf(tagTypes.TAG_DELETE):
      return {
        ...state,
        loading: false,
        tags: state.tags.filter((tag) => tag._id !== state.targetTag),
        modalVisibility: false,
        targetTag: null,
      }
    default:
      return state
  }
}
