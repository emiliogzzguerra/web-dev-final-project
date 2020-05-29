import React from "react"

import { useDispatch } from "react-redux"
import routes from "../routes"
import { Card, Input, Button, Form } from "antd"
import { useTranslation } from "react-i18next"
import { loginAction } from "../actions/authActions"

const LoginPage = (props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const login = (data) => dispatch(loginAction(data))

  const onFinish = (data) => {
    login(data)
  }

  return (
    <>
      <Card
        bordered={false}
        style={{
          border: "1px solid #dcdcdc",
          boxShadow: "0px 15px 20px 5px #0000001a",
          width: 400,
        }}
      >
        <h1 style={{ textAlign: "center" }}>React routing guide</h1>
        <Form hideRequiredMark colon={false} onFinish={onFinish} layout="vertical">
          <Form.Item
            label={t("Username")}
            name="user_name"
            rules={[{ required: true, message: "Email required" }]}
          >
            <Input size="large" placeholder="John@example.com" />
          </Form.Item>
          <Form.Item
            label={t("Password")}
            name="password"
            rules={[{ required: true, message: "Password required" }]}
          >
            <Input.Password size="large" type="password" placeholder="Password" />
          </Form.Item>
          <Button block size="large" htmlType="submit">
            Login
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default LoginPage
