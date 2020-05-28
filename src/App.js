import React from "react"
import { Router, Route, Switch, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history"

// Ant design
import "./styles/index.css"

// Redux
import { Provider } from "react-redux"
import store from "./store"

// Layouts & Route
import routes from "./routes"
import PublicLayout from "./components/layout/Public"
import DashboardLayout from "./components/layout/Dashboard"

// Public pages
import Login from "./pages/LoginPage"

// Protected pages
import DashboardPage from "./pages/DashboardPage"
import NotFoundPage from "./pages/NotFoundPage"

const pages = [
  {
    exact: true,
    path: routes.login,
    component: Login,
    layout: PublicLayout,
  },
  {
    exact: false,
    path: routes.dashboard,
    component: DashboardPage,
    layout: DashboardLayout,
  },
]

const App = () => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Provider store={store}>
        <Switch>
          {pages.map(
            ({ exact, path, component: Component, layout: Layout }, index) => {
              return (
                <Route
                  key={index}
                  exact={exact}
                  path={path}
                  render={(props) => (
                    <Layout history={props.history}>
                      <Component {...props} />
                    </Layout>
                  )}
                />
              )
            }
          )}
          <Redirect to={routes.dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </Provider>
    </Router>
  )
}

export default App
