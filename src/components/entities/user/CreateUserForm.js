import React, { useState, useEffect } from "react"
import { Input, Form, Select } from "antd"
import { useTranslation } from "react-i18next"
import { getAvailableUserTypes, getSimplifiedTags } from "../../../utils"
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

  // const getTags = dispatch()

  const availableTags = [
    {
      _id: "5ed0112dfbb5ec6350e65d7b",
      tag_name: "tag2",
      __v: 0,
      tag_id: "5ed0112dfbb5ec6350e65d7b",
      id: "5ed0112dfbb5ec6350e65d7b",
    },
    {
      _id: "5ed01c9e29bbc45bbc8c7272",
      tag_name: "tag1",
      __v: 0,
      tag_id: "5ed01c9e29bbc45bbc8c7272",
      id: "5ed01c9e29bbc45bbc8c7272",
    },
    ,
  ]

  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
    if (initialValues !== null) {
      const simplifiedTags = getSimplifiedTags(initialValues.tags)
      setTags(simplifiedTags)
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
          value={tags}
          style={{ width: "100%" }}
          onChange={(selected) => {
            setTags(selected)
          }}
        >
          {availableTags.map((tag) => (
            <Option key={tag.id}>{tag.tag_name}</Option>
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
