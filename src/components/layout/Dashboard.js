import React, { Component } from "react";
import { message,  Layout, Menu } from "antd";
import { AreaChartOutlined, LogoutOutlined, SettingOutlined, TeamOutlined, BlockOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

import routes from "../../routes";
const { Content } = Layout;

const StyledMenu = styled(Menu)`
  height: 100vh;
  width: 256px;

  &:last-child {
    background-color: red;
  }
`;

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 50px;
`;

const DashboardViews = [
  {
    name: "Dashboard",
    icon: <AreaChartOutlined />,
    route: routes.dashboard,
  },
  {
    name: "Users",
    icon: <TeamOutlined />,
    route: routes.users,
  },
  {
    name: "Areas",
    icon: <BlockOutlined />,
    route: routes.areas,
  },
  {
    name: "Settings",
    icon: <SettingOutlined />,
    route: routes.settings,
  },
]

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
    return (
      <StyledLayout>
        <StyledMenu
          onClick={this.handleClick}
          defaultSelectedKeys={['Dashboard']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          {DashboardViews.map(view => (
            <Menu.Item key={view.name} onClick={() => this.goTo(view.route)} icon={view.icon}>{view.name}</Menu.Item>
          ))}
          <Menu.Item key="Logout" onClick={() => this.onLogout()} icon={<LogoutOutlined />}>Logout</Menu.Item>
        </StyledMenu>
        <StyledContent>
          {this.props.children}
        </StyledContent>
      </StyledLayout>
    );
  }
}

export default DashboardLayout;
