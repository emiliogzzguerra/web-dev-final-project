import React, { useState, useEffect } from "react"
import { Input, Form, Select } from "antd"
import { useTranslation } from "react-i18next"
import { getAvailableUserTypes } from "../../../utils"
import { useSelector, useDispatch } from "react-redux"
import { tagTypes } from "../../../types"

const { Option } = Select
const { useForm } = Form

export default function CreateUserForm({ onFinish, initialValues = null, ...rest }) {
  // const dispatch = useDispatch()
  const { t } = useTranslation()
  const [userType, setUserType] = useState(1) // Initialized as "Simple" (1)
  const [tags, setTags] = useState([])
  const modalVisibility = useSelector((state) => state.user.modalVisibility)

  const children = [
    <Option key="ITESM">ITESM</Option>,
    <Option key="Desarrollo web">Desarrollo web</Option>,
    <Option key="Tercer tag">Tercer tag</Option>,
  ]

  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
    if (initialValues !== null) {
      setTags(initialValues.tags)
    } else {
      setTags([])
    }
  }, [initialValues, modalVisibility])

  const userTypes = getAvailableUserTypes(2)

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={(values) => {
        const newValues = { ...values, tags: tags, user_type: userType }
        onFinish(newValues)
      }}
      {...rest}
    >
      <Form.Item
        name="full_name"
        label={t("Fullname")}
        rules={[{ required: true, message: t("Full name required") }]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="user_name"
        label={t("Username")}
        rules={[{ required: true, message: t("Username required") }]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item name="user_type" label={t("User type")}>
        <Select
          defaultValue={userTypes[0].key}
          style={{ width: 120 }}
          onChange={(userType) => {
            setUserType(userType)
          }}
        >
          {userTypes.map((userType) => (
            <Option key={`${userType.key}-${userType.name}`} value={userType.key}>
              {userType.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="password"
        label={t("Password")}
        rules={[{ required: true, message: t("Password required") }]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Select
        mode="tags"
        value={tags}
        style={{ width: "100%" }}
        onChange={(selected) => {
          setTags(selected)
        }}
      >
        {children}
      </Select>
    </Form>
  )
}
