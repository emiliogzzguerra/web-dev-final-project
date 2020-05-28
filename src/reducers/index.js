import { combineReducers } from "redux"
import authReducer from "./authReducer"
import alertReducer from "./alertReducer"
import usersReducer from "./usersReducer"

export default combineReducers({
  auth: authReducer,
  alerta: alertReducer,
  user: usersReducer,
})
