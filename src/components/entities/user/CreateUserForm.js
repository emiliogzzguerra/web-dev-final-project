import React, { useState, useEffect } from "react"
import { Input, Form } from "antd"
import { useTranslation } from "react-i18next"

import { Select, Tag } from "antd"
const { useForm } = Form

const options = [
  { value: "Area1" },
  { value: "Area2" },
  { value: "Area3" },
  { value: "Area4" },
]

export default function CreateUserForm({ onFinish, initialValues = {}, ...rest }) {
  const { t } = useTranslation()
  const [selectedAreas, setSelectedAreas] = useState()

  const [form] = Form.useForm()

  useEffect(() => form.resetFields(), [initialValues])

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={(values) => {
        const newValues = { ...values, areas: selectedAreas }
        onFinish(newValues)
      }}
      {...rest}
    >
      <Form.Item
        name="full_name"
        label={t("Full name")}
        rules={[{ required: true, message: "Full name required" }]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="email"
        label={t("Email")}
        rules={[{ required: true, message: "Email required" }]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        name="password"
        label={t("Password")}
        rules={[{ required: true, message: "Password required" }]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        onChange={(selected) => {
          setSelectedAreas(selected)
        }}
        options={options}
      />
    </Form>
  )
}
