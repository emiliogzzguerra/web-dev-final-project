import { alertTypes } from "../types"

// Cada reducer tiene su state
const initialState = {
  alert: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case alertTypes.SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      }
    case alertTypes.HIDE_ALERT:
      return {
        ...state,
        alert: null,
      }
    default:
      return state
  }
}
