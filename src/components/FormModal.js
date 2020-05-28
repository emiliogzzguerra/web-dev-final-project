import React, { useState, useCallback } from "react"
import { Modal, Button } from "antd"

export default function FormModal({
  actionName,
  children,
  onOk,
  formId,
  submitText,
  ...rest
}) {
  const [visibility, setVisibility] = useState(false)

  return (
    <>
      <Modal
        {...rest}
        visible={visibility}
        onOk={() => {
          onOk(setVisibility)
        }}
        onCancel={() => setVisibility(false)}
        footer={[
          <>
            <Button onClick={() => setVisibility(false)}>Cancel</Button>
            <Button type="primary" form={formId} key="submit" htmlType="submit">
              {submitText}
            </Button>
          </>,
        ]}
      >
        <div style={{ paddingRight: "30px", paddingTop: "10px" }}>{children}</div>
      </Modal>
      <Button type="primary" onClick={() => setVisibility(true)}>
        {actionName}
      </Button>
    </>
  )
}
