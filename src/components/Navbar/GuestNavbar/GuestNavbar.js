import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import styles from './GuestNavbar.module.css';

class GuestNavbar extends Component {
  render() {
    return (
      <Aux>
        <ul className={styles.nav}>
          <li>
            <a href="/home">Login</a>
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
            <a href="#">Demo</a>
          </li>
        </ul>
      </Aux>
    );
  }
}

export default GuestNavbar;
