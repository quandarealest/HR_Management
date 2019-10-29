import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Switch, Route } from 'react-router-dom';

import UserManagement from '../../containers/UserManagementContainer/UserManagementContainer';
import UserAddNew from '../../containers/UserAddNewContainer/UserAddNewContainer';
const { Header, Content, Footer } = Layout;

export default class LayoutContent extends Component {
  render() {
    return (
      <Layout>
        <Header className="custom-header">
          <UserAddNew />
        </Header>
        <Content className="custom-content-wrapper">
          <Breadcrumb className="custom-breadcrumb">
          </Breadcrumb>
          <div className="custom-content">
            <Switch>
              <Route path="/" exact component={UserManagement} />
              <Route path="/users" exact component={UserManagement} />
            </Switch>
          </div>
        </Content>
        <Footer className="custom-footer">Created by Quan Bui 2019</Footer>
      </Layout>
    )
  }
}
