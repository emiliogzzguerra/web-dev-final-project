import React from "react"
import { useTranslation } from "react-i18next"

const MainView = (props) => {
  const { t } = useTranslation()

  console.log(process.env.REACT_APP_SECRET_CODE)

  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  )
}

export default MainView
