import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataAction } from "../../actions/dataActions"

const MainView = (props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const fetchData = () => dispatch(fetchDataAction())
  const data = useSelector((state) => state.data.data)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  )
}

export default MainView
