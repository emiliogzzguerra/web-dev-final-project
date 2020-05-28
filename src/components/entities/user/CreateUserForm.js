import React from "react"
import { Input, Form } from "antd"

export default function CreateUserForm({ ...rest }) {
  return (
    <Form {...rest}>
      <Form.Item
        name="example"
        label="Input"
        rules={[{ required: true, message: "Email required" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  )
}
