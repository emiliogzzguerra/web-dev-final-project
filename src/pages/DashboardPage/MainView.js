import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataAction } from "../../actions/dataActions"
import RadarChart from "../../components/graphs/RadarChart"
import { getUserAction } from "../../actions/authActions"

const MainView = (props) => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const fetchData = (userId) => dispatch(fetchDataAction("user", userId))
  const getUser = () => dispatch(getUserAction())
  const data = useSelector((state) => state.data.data)
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (user) {
      fetchData(user._id)
    }
  }, [user])

  return (
    <div>
      <h1>
        {t("Good afternoon,")} {user && user.full_name}
      </h1>
      <RadarChart
        data={data}
        language={i18n.language}
        chartColor={user && user.color}
      />
    </div>
  )
}

export default MainView
