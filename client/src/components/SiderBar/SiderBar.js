import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

export default class SiderBar extends Component {
  render() {
    return (
      <Sider collapsible >
        <div className="logo">
          HR Management
        </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>User Management</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Time Management</span>
            </Menu.Item>
          </Menu>
      </Sider>
    )
  }
}
