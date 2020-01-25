import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

class Navbar extends Component {
  render() {
    return (
      <Aux>
        <ul className="nav">
          <li>
            <a href="#">Home</a>
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
        </ul>
      </Aux>
    );
  }
}
export default Navbar;
