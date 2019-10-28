import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Switch, Route } from 'react-router-dom';

import UserManagement from '../../containers/UserManagementContainer/UserManagementContainer';
import UserAddNew from '../../containers/UserAddNewContainer/UserAddNewContainer';
import AccountManagement from '../../components/AccountManagement/AccountManagement';
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
              <Route path="/accounts" exact component={AccountManagement} />
            </Switch>
          </div>
        </Content>
        <Footer className="custom-footer">Quan Design ©2019 Created by Quan Bui</Footer>
      </Layout>
    )
  }
}
