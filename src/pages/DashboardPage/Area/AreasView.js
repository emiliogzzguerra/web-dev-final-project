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
      <TagsList
        tags={[
          {
            _id: "5ed0112dfbb5ec6350e65d7b",
            tag_name: "tag2",
            __v: 0,
            tag_id: "5ed0112dfbb5ec6350e65d7b",
            id: "5ed0112dfbb5ec6350e65d7b",
          },
          {
            _id: "5ed01c9e29bbc45bbc8c7272",
            tag_name: "tag1",
            __v: 0,
            tag_id: "5ed01c9e29bbc45bbc8c7272",
            id: "5ed01c9e29bbc45bbc8c7272",
          },
        ]}
      />
    </div>
  )
}

export default AreasView
