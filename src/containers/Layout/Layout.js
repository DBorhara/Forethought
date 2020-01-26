import React, { Component } from 'react';
// import styles from './Layout.module.css';
import { fire } from '../../config/Fire';
import Home from '../../components/Home/Home';
import Login from '../Login/Login';
import UserNavbar from '../../components/Navbar/UserNavBar/UserNavbar';
import GuestNavbar from '../../components/Navbar/GuestNavbar/GuestNavbar';
import Aux from '../../hoc/Aux/Aux';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }

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
            <Home />
          </Aux>
        ) : (
          <Aux>
            <GuestNavbar></GuestNavbar>
            <Login />
          </Aux>
        )}
      </div>
    );
  }
}

export default Layout;
