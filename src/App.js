import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './components/Home/Home';
import Login from './containers/Login/Login';
import Layout from './containers/Layout/Layout';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return <Layout></Layout>;
  }
}
export default App;
