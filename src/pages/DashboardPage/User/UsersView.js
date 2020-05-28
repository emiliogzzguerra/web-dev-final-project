import React, { useEffect } from "react"
import { Button, Form } from "antd"
import { getPathWithParam } from "../../../utils"
import routes from "../../../routes"
import CreateUserForm from "../../../components/entities/user/CreateUserForm"
import FormModal from "../../../components/FormModal"
import { useTranslation } from "react-i18next"
import UsersTable from "../../../components/entities/user/UsersTable"

const UsersView = (props) => {
  const { t } = useTranslation()

  const goToUser = () => {
    props.history.push(getPathWithParam(routes.user, "1234"))
  }

  const formId = "create_user"

  const users = [
    {
      user_id: 0,
      full_name: "Emilio",
      user_name: "emilio",
      password: "12345",
      user_type: 2,
      color: "#FFFFFF",
      areas: ["ITESM", "Desarrollo Web"],
    },
  ]

  return (
    <div>
      <h2>{t("Users View")}</h2>
      <FormModal
        forceRender
        actionName={t("Create user")}
        submitText={t("Create user")}
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
      <UsersTable users={users} />
    </div>
  )
}

export default UsersView
