import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';

import UserManagement from '../../containers/UserManagementContainer/UserManagementContainer';
const { Header, Content, Footer } = Layout;

export default class LayoutContent extends Component {
  render() {
    return (
      <Layout>
        <Header className="custom-header" />
        <Content className="custom-content-wrapper">
          <Breadcrumb className="custom-breadcrumb">
          </Breadcrumb>
          <div className="custom-content">
            <UserManagement />
          </div>
        </Content>
        <Footer className="custom-footer">Quan Design ©2019 Created by Quan Bui</Footer>
      </Layout>
    )
  }
}
