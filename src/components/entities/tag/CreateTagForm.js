import React, { useEffect } from "react"
import { Input, Form } from "antd"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const { useForm } = Form

export default function CreateTagForm({ onFinish, initialValues = null, ...rest }) {
  const { t } = useTranslation()
  const modalVisibility = useSelector((state) => state.tags.modalVisibility)

  const [form] = Form.useForm()

  useEffect(() => {
    form.resetFields()
  }, [initialValues, modalVisibility])

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={(values) => {
        onFinish(values)
      }}
      {...rest}
    >
      <Form.Item
        name="tag_name"
        label={t("Area name")}
        rules={[{ required: true, message: t("Area name required") }]}
      >
        <Input autoComplete="off" />
      </Form.Item>
    </Form>
  )
}
