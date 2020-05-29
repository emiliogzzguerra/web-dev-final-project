import { dataTypes } from "../types"
import reduxUtils from "../utils/redux"
import axiosClient from "../config/axios"
import Swal from "sweetalert2"
import i18n from "../i18n"

// Fetch
export function fetchDataAction() {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(dataTypes.DATA_FETCH))
    try {
      const response = await axiosClient.get("/data")
      dispatch(reduxUtils.getSuccessPayloadOf(dataTypes.DATA_FETCH, response.data))
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(dataTypes.DATA_FETCH, true))
    }
  }
}
