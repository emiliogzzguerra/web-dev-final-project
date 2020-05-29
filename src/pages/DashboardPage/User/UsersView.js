import React, { useState, useEffect } from "react"
import { Spin, Alert } from "antd"
import CreateUserForm from "../../../components/entities/user/CreateUserForm"
import FormModal from "../../../components/FormModal"
import { useTranslation } from "react-i18next"
import UsersTable from "../../../components/entities/user/UsersTable"
import styled from "@emotion/styled"

// Redux Actions
import {
  createUserAction,
  setVisibilityOfCreateUserModal,
  fetchUsersAction,
  deleteUserAction,
} from "../../../actions/usersActions"
import { useDispatch, useSelector } from "react-redux"

const UsersTableContainer = styled.div`
  height: 200px;
`

const UsersView = (props) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [initialValues, setInitialValues] = useState(null)

  // Actions
  const createUser = (user) => dispatch(createUserAction(user))
  const deleteUser = (user) => dispatch(deleteUserAction(user))
  const fetchUsers = () => dispatch(fetchUsersAction())

  // Accessing store's state
  const cargando = useSelector((state) => state.user.loading)
  const error = useSelector((state) => state.user.error)
  const modalVisibility = useSelector((state) => state.user.modalVisibility)
  const users = useSelector((state) => state.user.users)

  // Fetch users as soon as we load the view
  useEffect(() => {
    fetchUsers()
  }, [])

  // If initial values change, show the form modal (Editing a user)
  useEffect(() => {
    if (initialValues) {
      setVisibility(true)
    }
  }, [initialValues])

  // Whenever we close the modal form, reset the initialValues
  useEffect(() => {
    if (modalVisibility === false) {
      setInitialValues(null)
    }
  }, [modalVisibility])

  // Functions
  const setVisibility = (visibility) => {
    dispatch(setVisibilityOfCreateUserModal(visibility))
  }

  const onFinish = (user) => {
    createUser(user)
  }

  const formId = "create_user"

  return (
    <div>
      <h2>{t("Users View")}</h2>
      <FormModal
        forceRender
        actionName={t("Create user")}
        submitText={t("Create user")}
        visibility={modalVisibility}
        setVisibility={setVisibility}
        formId={formId}
      >
        {cargando && <Spin size="large" />}
        {error && <Alert type="error" message="Error!" />}
        <CreateUserForm
          id={formId}
          onFinish={onFinish}
          initialValues={initialValues}
        />
      </FormModal>
      <UsersTableContainer>
        <UsersTable
          users={users}
          editAction={(user) => {
            setInitialValues(user)
          }}
          deleteAction={(user) => {
            deleteUser(user)
            fetchUsers()
          }}
        />
      </UsersTableContainer>
    </div>
  )
}

export default UsersView
