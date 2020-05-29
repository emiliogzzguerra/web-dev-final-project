import React, { useState, useEffect } from "react"
import { Button, Spin, Alert } from "antd"
import { useTranslation } from "react-i18next"
import FormModal from "../../FormModal"
import { useDispatch, useSelector } from "react-redux"
import {
  setVisibilityOfCreateTagModal,
  updateTagAction,
  deleteTagAction,
} from "../../../actions/tagsActions"
import CreateTagForm from "./CreateTagForm"
import routes from "../../../routes"
import { getPathWithParam } from "../../../utils"
import { Link } from "react-router-dom"
import { createTagAction, fetchTagsAction } from "../../../actions/tagsActions"

export default function TagsList() {
  const { t } = useTranslation()
  const [actionName, setActionName] = useState(t("Create area"))
  const [initialValues, setInitialValues] = useState(null)
  const dispatch = useDispatch()

  const createTag = (data) => dispatch(createTagAction(data))
  const updateTag = (data) => dispatch(updateTagAction(data))
  const deleteTag = (data) => dispatch(deleteTagAction(data))
  const fetchTags = (data) => dispatch(fetchTagsAction())

  // Accessing store's state
  const loading = useSelector((state) => state.tags.loading)
  const error = useSelector((state) => state.tags.error)
  const modalVisibility = useSelector((state) => state.tags.modalVisibility)
  const tags = useSelector((state) => state.tags.tags)

  useEffect(() => {
    fetchTags()
  }, [])

  useEffect(() => {
    if (initialValues) {
      setVisibility(true)
      setActionName(t("Update area"))
    }
  }, [initialValues])

  const onFinish = (tag) => {
    if (initialValues) {
      const tagWithId = { ...tag, _id: initialValues._id }
      updateTag(tagWithId)
    } else {
      createTag(tag)
    }
  }

  // Functions
  const setVisibility = (visibility) => {
    dispatch(setVisibilityOfCreateTagModal(visibility))
  }

  const handleClick = (tag, event) => {
    setVisibility(true)
    setInitialValues(tag)
  }

  // Whenever we close the modal form, reset the initialValues and fetch the users again
  useEffect(() => {
    if (modalVisibility === false) {
      setInitialValues(null)
      setActionName(t("Create area"))
    }
  }, [modalVisibility])

  const formId = "area-form"
  return (
    <>
      <FormModal
        forceRender
        actionName={t("Create area")}
        submitText={actionName}
        visibility={modalVisibility}
        setVisibility={setVisibility}
        formId={formId}
        footer={[
          <div key={`${formId}-modal-action-buttons`}>
            <Button
              onClick={() => {
                setVisibility(false)
              }}
            >
              {t("Cancel")}
            </Button>
            <Button type="primary" onClick={() => deleteTag(initialValues)} danger>
              {t("Delete area")}
            </Button>
            <Button type="primary" form={formId} key="submit" htmlType="submit">
              {actionName}
            </Button>
          </div>,
        ]}
      >
        {loading && <Spin size="large" />}
        {error && <Alert type="error" message="Error!" />}
        <CreateTagForm
          id={formId}
          onFinish={onFinish}
          initialValues={initialValues}
        />
      </FormModal>
      {tags.map((tag) => (
        <div key={`tag-${tag._id}`}>
          <h2>{tag.tag_name}</h2>
          <Button onClick={handleClick.bind(this, tag)}>{t("Edit area")}</Button>
          <Link to={getPathWithParam(routes.area, tag._id)}>
            <Button>{t("View area")}</Button>
          </Link>
        </div>
      ))}
    </>
  )
}
