import React, { Component } from 'react';
import { fire } from '../../config/Fire';
import Login from '../Login/Login';
import UserNavbar from '../../components/Navbar/UserNavBar/UserNavbar';
import GuestNavbar from '../../components/Navbar/GuestNavbar/GuestNavbar';
import Aux from '../../hoc/Aux/Aux';
import styles from './Layout.module.css';
import firebase from 'firebase';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    // this.userId = fire.auth().currentUser.uid;
    this.authSubscription = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user,
        isLoading: false,
      });
    });
    console.log(this.authSubscription);
  }

  componentWillUnmount = () => {
    this.authSubscription();
  };

  // authListener() {
  //   fire.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user: user, isLoading: false });
  //       // localStorage.setItem('user', user.uid);
  //     } else {
  //       this.setState({ user: null, isLoading: false });
  //       // localStorage.removeItem('user');
  //     }
  //   });
  // }

  logoutHandler = () => {
    firebase
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
        {this.state.isLoading ? (
          <h1>Is Loading...</h1>
        ) : this.state.user ? (
          <Aux>
            <UserNavbar logoutHandler={this.logoutHandler}></UserNavbar>
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
