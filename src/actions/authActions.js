import React from "react"
import { authTypes } from "../types"
import reduxUtils from "../utils/redux"
import axiosClient from "../config/axios"
import routes from "../routes"
import history from "../utils/history"

export const loginAction = (datos) => {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(authTypes.LOGIN))
    try {
      const respuesta = await axiosClient.post("/login", datos)
      dispatch(reduxUtils.getSuccessPayloadOf(authTypes.LOGIN, respuesta.data))
      history.push("/dashboard")
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(authTypes.LOGIN, error))
    }
  }
}

export const logoutAction = (datos) => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(reduxUtils.getSuccessPayloadOf(authTypes.LOGOUT))
    this.props.history.push(routes.login)
  }
}

export function getUserAction() {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(authTypes.GET_USER))
    try {
      const response = await axiosClient.get("/users/myinfo")
      dispatch(reduxUtils.getSuccessPayloadOf(authTypes.GET_USER, response.data))
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(authTypes.GET_USER, true))
    }
  }
}
