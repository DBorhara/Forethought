import React, { Component } from 'react';
import { fire } from '../../config/Fire';

import UserNavbar from '../../components/Navbar/UserNavBar/UserNavbar';
import GuestNavbar from '../../components/Navbar/GuestNavbar/GuestNavbar';
import Aux from '../../hoc/Aux/Aux';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.authSubscription = fire.auth().onAuthStateChanged(user => {
      this.setState({
        user,
      });
    });
  }

  componentWillUnmount = () => {
    this.authSubscription();
  };

  logoutHandler = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        console.log('User has signed out');
      })
      .catch(function(error) {
        console.error(error);
      });
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <div>
        {this.state.user ? (
          <Aux>
            <UserNavbar logoutHandler={this.logoutHandler}></UserNavbar>
          </Aux>
        ) : (
          <Aux>
            <GuestNavbar></GuestNavbar>
          </Aux>
        )}
      </div>
    );
  }
}

export default Layout;
