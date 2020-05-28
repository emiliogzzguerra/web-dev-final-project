import React, { useEffect } from "react"
import { Button, Form } from "antd"
import { getPathWithParam } from "../../../utils"
import routes from "../../../routes"
import CreateUserForm from "../../../components/entities/user/CreateUserForm"
import FormModal from "../../../components/FormModal"
import { useTranslation } from "react-i18next"

const UsersView = (props) => {
  const { t } = useTranslation("dashboard")

  const goToUser = () => {
    props.history.push(getPathWithParam(routes.user, "1234"))
  }

  const formId = "create_user"

  return (
    <div>
      <h2>Users View</h2>
      <Button onClick={goToUser}>Go to user 1234</Button>
      <FormModal
        forceRender
        actionName={t("dashboard:user.boton_crear")}
        submitText={t("dashboard:user.boton_crear")}
        handleCreate={(cb) => {
          cb(false)
        }}
        formId={formId}
      >
        <CreateUserForm
          id={formId}
          onFinish={(data) => {
            debugger
            console.log("finished")
          }}
        />
      </FormModal>
    </div>
  )
}

export default UsersView
