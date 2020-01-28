import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routed from './router';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Routed />
      </div>
    );
  }
}
export default App;
