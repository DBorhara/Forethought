import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import styles from './UserNavbar.module.css';
import axios from 'axios';
// import Layout from '../../../containers/Layout/Layout';

class UserNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    console.log('User Name');
  }

  handleLogoutClick = () => {
    axios.delete();
    this.props.logoutHandler();
  };

  render() {
    return (
      <Aux>
        <ul className={styles.nav}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li onClick={() => this.handleLogoutClick()}>
            <a href="#">Logout</a>
          </li>
        </ul>
      </Aux>
    );
  }
}

export default UserNavbar;
