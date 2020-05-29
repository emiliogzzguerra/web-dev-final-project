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
        footer={[
          <div key={`${formId}-modal-action-buttons`}>
            <Button onClick={() => setVisibility(false)}>{t("Cancel")}</Button>
            <Button type="primary" form={formId} key="submit" htmlType="submit">
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
