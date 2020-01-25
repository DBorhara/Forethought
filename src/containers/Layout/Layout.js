import React, { Component } from 'react';
import styles from './Layout.module.css';
import fire from '../../config/Fire';
import Home from '../../components/Home/Home';
import Login from '../Login/Login';

class Layout extends Component {
  constructor() {
    super();
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
      console.log(user);
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
          <Home logoutHandler={this.logoutHandler} />
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default Layout;
