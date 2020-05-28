import React, { useEffect } from "react"
import { Button } from "antd"

const UserView = (props) => {
  const goBack = () => {
    props.history.goBack()
  }

  return (
    <div>
      <h2>User View</h2>
      <p>Currently viewing user with id:{props.match.params.id}</p>
      <Button onClick={() => goBack()}>Go back</Button>
    </div>
  )
}

export default UserView
