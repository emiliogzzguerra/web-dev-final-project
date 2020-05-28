import React from "react"
import { Switch } from "react-router-dom"

import RouteWithProps from "../../components/routes/RouteWithProps"
import routes from "../../routes"

import MainView from "./MainView"
import SettingsView from "./SettingsView"
import StatisticsView from "./StatisticsView"
import AreasView from "./AreasView"
import UsersView from "./UsersView"
import AreaView from "./AreaView"
import UserView from "./UserView"

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
      <RouteWithProps
        exact
        path={routes.statistics}
        extraProps={{ loggedInUser: user }}
        component={StatisticsView}
      />
    </Switch>
  )
}

export default DashboardPage
