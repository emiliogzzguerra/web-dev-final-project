import React, { useState, useCallback } from "react"
import { Modal, Button } from "antd"

export default function FormModal({
  actionName,
  children,
  formId,
  submitText,
  handleSubmit,
  visibility,
  setVisibility,
  ...rest
}) {
  return (
    <>
      <Modal
        {...rest}
        visible={visibility}
        onCancel={() => setVisibility(false)}
        footer={[
          <div key={`${formId}-modal-action-buttons`}>
            <Button onClick={() => setVisibility(false)}>Cancel</Button>
            <Button
              type="primary"
              form={formId}
              key="submit"
              htmlType="submit"
              // onClick={() => setVisibility(false)}
            >
              {submitText}
            </Button>
          </div>,
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
