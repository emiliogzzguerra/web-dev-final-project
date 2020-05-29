import { dataTypes } from "../types"
import reduxUtils from "../utils/redux"
import axiosClient from "../config/axios"
import Swal from "sweetalert2"
import i18n from "../i18n"

// Fetch
export function fetchDataAction(source = null, id = null) {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(dataTypes.DATA_FETCH))
    try {
      let response
      if (source === "tag") {
        response = await axiosClient.get(`/data?tag_id=${id}`)
      } else if (source === "user") {
        response = await axiosClient.get(`/data?user_id=${id}`)
      } else {
        response = await axiosClient.get("/data")
      }
      dispatch(reduxUtils.getSuccessPayloadOf(dataTypes.DATA_FETCH, response.data))
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(dataTypes.DATA_FETCH, true))
    }
  }
}
