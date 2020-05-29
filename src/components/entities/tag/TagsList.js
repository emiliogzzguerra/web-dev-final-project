import React, { useState, useEffect } from "react"
import { Button, Spin, Alert } from "antd"
import { useTranslation } from "react-i18next"
import FormModal from "../../FormModal"
import { useDispatch, useSelector } from "react-redux"
import { setVisibilityOfCreateUserModal } from "../../../actions/usersActions"
import CreateTagForm from "./CreateTagForm"
import routes from "../../../routes"
import { getPathWithParam } from "../../../utils"
import { Link } from "react-router-dom"

export default function TagsList({ tags, history }) {
  const { t } = useTranslation()
  const [actionName, setActionName] = useState(t("Create area"))
  const [initialValues, setInitialValues] = useState(null)
  const dispatch = useDispatch()

  // Accessing store's state
  const cargando = useSelector((state) => state.user.loading)
  const error = useSelector((state) => state.user.error)
  const modalVisibility = useSelector((state) => state.user.modalVisibility)
  // const tags = useSelector((state) => state.user.users)

  useEffect(() => {
    if (initialValues) {
      setVisibility(true)
      setActionName(t("Update area"))
    }
  }, [initialValues])

  const onFinish = (data) => {
    console.log("finished", data)
  }

  // Functions
  const setVisibility = (visibility) => {
    dispatch(setVisibilityOfCreateUserModal(visibility))
  }

  const handleClick = (tag, event) => {
    console.log(tag)
    setVisibility(true)
    setInitialValues({ tag_name: tag.tag_name })
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
            <Button type="primary" form={formId} key="submit" htmlType="submit">
              {actionName}
            </Button>
          </div>,
        ]}
      >
        {cargando && <Spin size="large" />}
        {error && <Alert type="error" message="Error!" />}
        <CreateTagForm
          id={formId}
          onFinish={onFinish}
          initialValues={initialValues}
        />
      </FormModal>
      {tags.map((tag) => (
        <div key={`tag-${tag.id}`}>
          <h2>{tag.tag_name}</h2>
          <Button onClick={handleClick.bind(this, tag)}>{t("Edit area")}</Button>
          <Link to={getPathWithParam(routes.area, tag.id)}>
            <Button>{t("View area")}</Button>
          </Link>
        </div>
      ))}
    </>
  )
}
