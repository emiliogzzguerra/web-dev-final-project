import React from "react"
import { useTranslation } from "react-i18next"

const NotFoundView = (props) => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t("404 Page not found")}</h1>
    </div>
  )
}

export default NotFoundView
