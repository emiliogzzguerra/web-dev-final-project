import React, { useState } from "react"

// Redux actions
import { showAlert } from "../actions/alertActions"
import { useDispatch, useSelector } from "react-redux"
import routes from "../routes"
import { Card, Input, Button, Form } from "antd"

const LoginPage = (props) => {
  // Component's state
  const [email, saveEmail] = useState("")
  const [password, savePassword] = useState("")

  // Using use dispatch that returns a function
  const dispatch = useDispatch()

  const mostrarAlerta = (alertText) => dispatch(showAlert(alertText))

  // Cuando el usuario quiere iniciar sesión
  const onFinish = (data) => {
    debugger
    mostrarAlerta("hello")

    // Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error")
    }

    localStorage.setItem("token", "I am now logged in")
    props.history.push(routes.dashboard)
  }

  return (
    <div className="form-usuario">
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
            label="Email"
            rules={[{ required: true, message: "Email required" }]}
          >
            <Input
              size="large"
              placeholder="John@example.com"
              value={email}
              onChange={(e) => saveEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            rules={[{ required: true, message: "Password required" }]}
          >
            <Input.Password
              size="large"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => savePassword(e.target.value)}
            />
          </Form.Item>
          <Button block size="large" htmlType="submit">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
