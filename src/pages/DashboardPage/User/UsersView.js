import React, { useState, useEffect } from "react"
import { Spin, Alert, Button } from "antd"
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
  updateUserAction,
} from "../../../actions/usersActions"
import { useDispatch, useSelector } from "react-redux"

const UsersTableContainer = styled.div`
  height: 200px;
`

const UsersView = (props) => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const [initialValues, setInitialValues] = useState(null)
  const [actionName, setActionName] = useState(t("Create user"))

  // Actions
  const createUser = (user) => dispatch(createUserAction(user))
  const updateUser = (user) => dispatch(updateUserAction(user))
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
      setActionName(t("Update user"))
    }
  }, [initialValues])

  // Whenever we close the modal form, reset the initialValues and fetch the users again
  useEffect(() => {
    if (modalVisibility === false) {
      setInitialValues(null)
      setActionName(t("Create user"))
    }
  }, [modalVisibility])

  // Functions
  const setVisibility = (visibility) => {
    dispatch(setVisibilityOfCreateUserModal(visibility))
  }

  const onFinish = (user) =>
    new Promise((resolve, reject) => {
      if (initialValues) {
        const userWithId = { ...user, id: initialValues.id }
        updateUser(userWithId)
      } else {
        createUser(user)
      }
      resolve()
    }).then(() => {
      if (initialValues) {
        setVisibility(false)
      }
      fetchUsers()
    })

  const formId = "create_user"

  return (
    <div>
      <h2>{t("Users View")}</h2>
      <FormModal
        forceRender
        actionName={t("Create user")}
        submitText={actionName}
        visibility={modalVisibility}
        setVisibility={setVisibility}
        formId={formId}
        footer={[
          <div key={`${formId}-modal-action-buttons`}>
            <Button onClick={() => setVisibility(false)}>{t("Cancel")}</Button>
            <Button type="primary" form={formId} key="submit" htmlType="submit">
              {actionName}
            </Button>
          </div>,
        ]}
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
          deleteAction={(user) =>
            new Promise((resolve, reject) => {
              deleteUser(user)
              resolve()
            }).then(() => {
              fetchUsers()
            })
          }
        />
      </UsersTableContainer>
    </div>
  )
}

export default UsersView
