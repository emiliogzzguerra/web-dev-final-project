import { userTypes } from "../types"
import reduxUtils from "../utils/redux"
import axiosClient from "../config/axios"
import Swal from "sweetalert2"
import i18n from "../i18n"

// Create
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
      Swal.fire(i18n.t("Success"), i18n.t("The user was created"), "success")
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(userTypes.USER_CREATE, true))
      throw error
    }
  }
}

// Read
export function fetchUsersAction() {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(userTypes.USER_FETCH))
    try {
      const response = await axiosClient.get("/user")
      dispatch(reduxUtils.getSuccessPayloadOf(userTypes.USER_FETCH, response.data))
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(userTypes.USER_FETCH, true))
    }
  }
}

// Update

// Delete
export function deleteUserAction(user) {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(userTypes.USER_DELETE))
    try {
      const response = await axiosClient.delete(`/user/${user.id}`)
      dispatch(reduxUtils.getSuccessPayloadOf(userTypes.USER_DELETE, response))
      Swal.fire(i18n.t("Success"), i18n.t("The user has been deleted"), "success")
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(userTypes.USER_DELETE, true))
    }
  }
}