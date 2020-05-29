import React, { useState, useCallback } from "react"
import { Modal, Button } from "antd"
import { useTranslation } from "react-i18next"

export default function FormModal({
  actionName,
  children,
  formId,
  submitText,
  handleSubmit,
  visibility,
  setVisibility,
  hideButton = false,
  footer,
  ...rest
}) {
  const { t } = useTranslation()
  return (
    <>
      <Modal
        {...rest}
        visible={visibility}
        maskClosable={false}
        onCancel={() => setVisibility(false)}
        footer={footer}
      >
        <div style={{ paddingRight: "30px", paddingTop: "10px" }}>{children}</div>
      </Modal>
      {!hideButton && (
        <Button type="primary" onClick={() => setVisibility(true)}>
          {actionName}
        </Button>
      )}
    </>
  )
}
