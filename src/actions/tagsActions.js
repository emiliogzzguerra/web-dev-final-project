import { tagTypes } from "../types"
import reduxUtils from "../utils/redux"
import axiosClient from "../config/axios"
import Swal from "sweetalert2"
import i18n from "../i18n"

// Create
export function setVisibilityOfCreateTagModal(visibility) {
  return (dispatch) => {
    dispatch(
      reduxUtils.getSetVisibilityOfModalFormPayloadOf(
        tagTypes.TAG_CREATE,
        visibility
      )
    )
  }
}

export function createTagAction(tag) {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(tagTypes.TAG_CREATE))
    try {
      const response = await axiosClient.post("/tags", tag)
      dispatch(reduxUtils.getSuccessPayloadOf(tagTypes.TAG_CREATE, response.data))
      Swal.fire(i18n.t("Success"), i18n.t("The area was created"), "success")
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(tagTypes.TAG_CREATE, true))
      throw error
    }
  }
}

// Read
export function fetchTagsAction() {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(tagTypes.TAG_FETCH))
    try {
      const response = await axiosClient.get("/tags")
      dispatch(reduxUtils.getSuccessPayloadOf(tagTypes.TAG_FETCH, response.data))
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(tagTypes.TAG_FETCH, true))
    }
  }
}

// Update
export function updateTagAction(tag) {
  return async (dispatch) => {
    console.log("updateTagAction", tag)
    dispatch(reduxUtils.getStartPayloadOf(tagTypes.TAG_UPDATE, tag._id))
    try {
      await axiosClient.patch("/tags", tag)
      dispatch(reduxUtils.getSuccessPayloadOf(tagTypes.TAG_UPDATE, tag))
      Swal.fire(i18n.t("Success"), i18n.t("The area has been updated"), "success")
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(tagTypes.TAG_UPDATE, true))
    }
  }
}

// Delete
export function deleteTagAction(tag) {
  return async (dispatch) => {
    dispatch(reduxUtils.getStartPayloadOf(tagTypes.TAG_DELETE, tag._id))
    try {
      const response = await axiosClient.delete("/tags", {
        data: { _id: tag._id },
      })
      dispatch(reduxUtils.getSuccessPayloadOf(tagTypes.TAG_DELETE, tag._id))
      Swal.fire(i18n.t("Success"), i18n.t("The area has been deleted"), "success")
    } catch (error) {
      dispatch(reduxUtils.getFailurePayloadOf(tagTypes.TAG_DELETE, true))
    }
  }
}
