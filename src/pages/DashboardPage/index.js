import React from "react"
import { Switch } from "react-router-dom"

import RouteWithProps from "../../components/routes/RouteWithProps"
import routes from "../../routes"

import MainView from "./MainView"
import SettingsView from "./SettingsView"
import AreasView from "./Area/AreasView"
import AreaView from "./Area/AreaView"
import UsersView from "./User/UsersView"
import UserView from "./User/UserView"

const DashboardPage = () => {
  const user = { name: "Hello world" }
  return (
    <Switch>
      <RouteWithProps exact path={routes.dashboard} component={MainView} />
      <RouteWithProps exact path={routes.areas} component={AreasView} />
      <RouteWithProps exact path={routes.area} component={AreaView} />
      <RouteWithProps exact path={routes.user} component={UserView} />
      <RouteWithProps exact path={routes.users} component={UsersView} />
      <RouteWithProps exact path={routes.settings} component={SettingsView} />
    </Switch>
  )
}

export default DashboardPage
