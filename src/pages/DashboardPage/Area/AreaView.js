import React, { useEffect } from "react"
import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataAction } from "../../../actions/dataActions"
import { useTranslation } from "react-i18next"
import RadarChart from "../../../components/graphs/RadarChart"

const AreaView = (props) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const fetchData = (id) => dispatch(fetchDataAction("tag", id))
  const data = useSelector((state) => state.data.data)

  useEffect(() => {
    fetchData(props.match.params.id)
  }, [])

  const goBack = () => {
    props.history.goBack()
  }

  return (
    <div>
      <h2>Area View</h2>
      <p>Visualizing Area with id #{props.match.params.id}</p>
      <Button onClick={() => goBack()}>Go back</Button>
      <RadarChart data={data} />
    </div>
  )
}

export default AreaView
