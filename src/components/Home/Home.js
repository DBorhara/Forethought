import React, { Component } from 'react';
import { fire, db, auth } from '../../config/Fire';
import axios from 'axios';
import UserNavbar from '../Navbar/UserNavBar/UserNavbar';
import firebase from 'firebase';
import Aux from '../../hoc/Aux/Aux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    console.log(firebase.auth.currentUser);
  }

  render() {
    return (
      <Aux className="col-md-6">
        <img
          src={
            fire.auth().currentUser.photoURL
              ? fire.auth().currentUser.photoURL
              : 'https://spotlightmedia.com/wp-content/uploads/2015/07/ClientLogincol2.png'
          }
          alt="Profile Pic"
        />
        <p>
          Welcome,{' '}
          {firebase.auth().currentUser.displayName
            ? firebase.auth().currentUser.displayName
            : 'NO NAME MCGEE'}
        </p>
      </Aux>
    );
  }
}

export default Home;
