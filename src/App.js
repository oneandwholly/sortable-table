import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

import DevicesManagement from "./DevicesManagement/DevicesManagement";

const { Header, Content, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: true
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header" style={{ padding: 0 }} />
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{ background: "#002140" }}
          >
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ backgroundColor: "white" }}>
            <DevicesManagement />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
