import React from "react"

import { useDispatch, useSelector } from "react-redux"
import routes from "../routes"
import { Card, Input, Button, Form, Alert, Spin } from "antd"
import { useTranslation } from "react-i18next"
import { loginAction } from "../actions/authActions"
import styled from "@emotion/styled"
import LanguageSwitch from "../components/LanguageSwitch"

const StyledSpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const LoginPage = (props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const login = (data) => dispatch(loginAction(data))
  const error = useSelector((state) => state.auth.error)
  const loading = useSelector((state) => state.auth.loading)

  const onFinish = (data) => {
    login(data)
  }

  return (
    <>
      <LanguageSwitch />
      <Card
        bordered={false}
        style={{
          border: "1px solid #dcdcdc",
          boxShadow: "0px 15px 20px 5px #0000001a",
          width: 400,
        }}
      >
        <h1 style={{ textAlign: "center" }}>{t("Infinite dashboard")}</h1>
        {loading ? (
          <StyledSpinnerDiv>
            <Spin size="large" />
          </StyledSpinnerDiv>
        ) : (
          <Form hideRequiredMark colon={false} onFinish={onFinish} layout="vertical">
            <Form.Item
              label={t("Username")}
              name="user_name"
              rules={[{ required: true, message: t("Username required") }]}
            >
              <Input size="large" placeholder={t("exampleUsername")} />
            </Form.Item>
            <Form.Item
              label={t("Password")}
              name="password"
              rules={[{ required: true, message: t("Password required") }]}
            >
              <Input.Password
                size="large"
                type="password"
                placeholder={t("Password")}
              />
            </Form.Item>
            {error && (
              <Alert
                message={error.statusText}
                style={{ marginBottom: "10px" }}
                type="error"
              />
            )}
            <Button block size="large" htmlType="submit">
              {t("Login")}
            </Button>
            <h3 style={{ marginTop: "15px" }}>Credenciales (cuenta y contraseña)</h3>
            <ul>
              <li>superuser:superuser</li>
              <li>admin:admin</li>
              <li>privilegeduser:privilegeduser</li>
              <li>simpleuser:simpleuser</li>
            </ul>
          </Form>
        )}
      </Card>
    </>
  )
}

export default LoginPage
