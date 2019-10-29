import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import store from './store';
import './App.css';

import SiderBar from './components/SiderBar/SiderBar';
import LayoutContent from './components/Layout/LayoutContent';

require('dotenv').config();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Layout className="custom-layout">
            <SiderBar/>
            <Switch>
              <Route path="/" exact component={LayoutContent} />
              <Route path="/users" exact component={LayoutContent} />
            </Switch>
          </Layout>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
