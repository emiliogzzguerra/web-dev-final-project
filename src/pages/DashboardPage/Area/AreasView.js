import React from "react"
import { Button, Spin, Alert } from "antd"
import routes from "../../../routes"
import { getPathWithParam } from "../../../utils"
import { useTranslation } from "react-i18next"
import FormModal from "../../../components/FormModal"
import TagsList from "../../../components/entities/tag/TagsList"

const AreasView = (props) => {
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t("Areas view")}</h2>
      <TagsList />
    </div>
  )
}

export default AreasView
