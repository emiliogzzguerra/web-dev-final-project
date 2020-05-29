import React from "react"
import { Button } from "antd"
import routes from "../../../routes"
import { getPathWithParam } from "../../../utils"
import { useTranslation } from "react-i18next"

const AreasView = (props) => {
  const { t } = useTranslation()
  const goToArea = () => {
    props.history.push(getPathWithParam(routes.area, "1234"))
  }
  return (
    <div style={{ marginTop: 120, textAlign: "center" }}>
      <h2>{t("Areas view")}</h2>
      <Button onClick={() => goToArea()}>Go to area 1234</Button>
    </div>
  )
}

export default AreasView
