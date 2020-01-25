import React, { Component } from 'react';
import fire from '../../config/Fire';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick = () => {
    axios.delete();
    this.props.logoutHandler();
  };

  render() {
    return (
      <div className="col-md-6">
        <Navbar></Navbar>

        <button onClick={() => this.handleLogoutClick()}>logout</button>
      </div>
    );
  }
}

export default Home;
