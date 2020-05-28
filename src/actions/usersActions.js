import { userTypes } from "../types"
import reduxUtils from "../utils/redux"
import axiosClient from "../config/axios"
import Swal from "sweetalert2"

// Logic to manage the create user modal and to create the user in the DB

export function setVisibilityOfCreateUserModal(visibility) {
  return (dispatch) => {
    dispatch(
      reduxUtils.getSetVisibilityOfModalFormPayloadOf(
        userTypes.USER_CREATE,
        visibility
      )
    )
  }
}

export function createUserAction(user) {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(userTypes.USER_CREATE))
    try {
      await axiosClient.post("/user", user)
      dispatch(reduxUtils.getSuccessPayloadOf(userTypes.USER_CREATE, user))
      Swal.fire("Correcto", "El usuario fue creado", "success")
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(userTypes.USER_CREATE, true))
      throw error
    }
  }
}

// Logic to fetch the users

export function fetchUsersAction() {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(userTypes.USER_FETCH))
    try {
      const response = await axiosClient.get("/user")
      dispatch(reduxUtils.getSuccessPayloadOf(userTypes.USER_FETCH, response.data))
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(userTypes.USER_FETCH))
    }
  }
}
