import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';

import store from './store';
import './App.css';

import SiderBar from './components/SiderBar/SiderBar';
import LayoutContent from './components/Layout/LayoutContent';
require('dotenv').config();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout className="custom-layout">
          <SiderBar/>
          <LayoutContent/>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
