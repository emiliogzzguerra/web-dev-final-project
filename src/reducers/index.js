import { combineReducers } from "redux"
import authReducer from "./authReducer"
import alertReducer from "./alertReducer"
import usersReducer from "./usersReducer"
import tagsReducer from "./tagsReducer"
import dataReducer from "./dataReducer"

export default combineReducers({
  auth: authReducer,
  alerta: alertReducer,
  users: usersReducer,
  tags: tagsReducer,
  data: dataReducer,
})
