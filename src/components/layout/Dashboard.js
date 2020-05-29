import React, { Component } from "react";
import { message,  Layout, Menu } from "antd";
import { AreaChartOutlined, LogoutOutlined, SettingOutlined, TeamOutlined, BlockOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

import routes from "../../routes";
import LanguageSwitch from "../LanguageSwitch";
import { withTranslation } from 'react-i18next';
const { Content } = Layout;

const StyledMenu = styled(Menu)`
  height: 100%;
  width: 256px;
`;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

class DashboardLayout extends Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      // User is not logged in. Redirect back to login
      this.props.history.push(routes.login);
      message.warning("Please login first");
      return;
    }
  }

  goTo = (route) => {
    this.props.history.push(route);
  }

  onLogout = () => {
    // Remove token & other stored data
    localStorage.clear();
    this.props.history.push(routes.login);
  };

  render() {
    const DashboardViews = [
      {
        key: "dash-menu-dashboard",
        name: this.props.t('Dashboard'),
        icon: <AreaChartOutlined />,
        route: routes.dashboard,
      },
      {
        key: "dash-menu-users",
        name: this.props.t('Users'),
        icon: <TeamOutlined />,
        route: routes.users,
      },
      {
        key: "dash-menu-areas",
        name: this.props.t('Areas'),
        icon: <BlockOutlined />,
        route: routes.areas,
      },
    ]
    return (
      <StyledLayout>
        <StyledMenu
          onClick={this.handleClick}
          defaultSelectedKeys={["dash-menu-dashboard"]}
          mode="inline"
        >
          {DashboardViews.map(view => (
            <Menu.Item key={view.key} onClick={() => this.goTo(view.route)} icon={view.icon}>{view.name}</Menu.Item>
          ))}
          <Menu.Item key="dash-menu-logout" onClick={() => this.onLogout()} icon={<LogoutOutlined />}>{this.props.t('Logout')}</Menu.Item>
        </StyledMenu>
        <StyledContent>
          <LanguageSwitch />
          {this.props.children}
        </StyledContent>
      </StyledLayout>
    );
  }
}

export default withTranslation()(DashboardLayout);
