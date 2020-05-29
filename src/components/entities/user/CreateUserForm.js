import React, { useState, useEffect } from "react"
import { Input, Form, Select } from "antd"
import { useTranslation } from "react-i18next"
import { getAvailableUserTypes, getSimplifiedTags } from "../../../utils"
import { useSelector, useDispatch } from "react-redux"
import { tagTypes } from "../../../types"
import { fetchTagsAction } from "../../../actions/tagsActions"

const { Option } = Select
const { useForm } = Form

export default function CreateUserForm({ onFinish, initialValues = null, ...rest }) {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [userType, setUserType] = useState(1) // Initialized as "Simple" (1)
  const [selectedTags, setSelectedTags] = useState([])
  const modalVisibility = useSelector((state) => state.users.modalVisibility)

  const fetchTags = (data) => dispatch(fetchTagsAction())
  const tags = useSelector((state) => state.tags.tags)

  useEffect(() => {
    fetchTags()
  }, [])

  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
    if (initialValues !== null) {
      const simplifiedTags = getSimplifiedTags(initialValues.tags)
      setSelectedTags(simplifiedTags)
    } else {
      setSelectedTags([])
    }
  }, [initialValues, modalVisibility])

  const userTypes = getAvailableUserTypes(2)

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={(values) => {
        const newValues = { ...values, tags: selectedTags, user_type: userType }
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
      <Form.Item
        name="user_type"
        label={t("User type")}
        rules={[{ required: true, message: t("User type required") }]}
      >
        <Select
          // defaultValue={userTypes[0].key}
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
      <Form.Item label="Areas:">
        <Select
          mode="tags"
          value={selectedTags}
          style={{ width: "100%" }}
          onChange={(selected) => {
            debugger
            setSelectedTags(selected)
          }}
        >
          {tags.map((tag) => (
            <Option key={tag._id}>{tag.tag_name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="color"
        label={t("Color")}
        rules={[
          {
            required: true,
            message: t("Color required"),
            pattern: new RegExp(/#[0-9a-fA-F]{6}$/g),
            message: t("Wrong color format"),
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
    </Form>
  )
}
