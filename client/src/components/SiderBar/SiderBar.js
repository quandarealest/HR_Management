import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

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
              <Link to="/">
                <Icon type="user" />
                <span>User Management</span>
              </Link>
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
