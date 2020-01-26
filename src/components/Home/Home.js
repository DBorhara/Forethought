import React, { Component } from 'react';
// import { fire, db, auth } from '../../config/Fire';
// import axios from 'axios';
// import UserNavbar from '../Navbar/UserNavBar/UserNavbar';
import firebase from 'firebase';
import Aux from '../../hoc/Aux/Aux';
// import { FirebaseAuth } from 'react-firebaseui';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    console.log('User Name');
  }

  handleGetUserData = () => {};

  componentDidMount() {
    console.log(firebase.auth().currentUser);
  }

  render() {
    return (
      <Aux className="col-md-6">
        <img src={firebase.auth().currentUser.photoURL} alt="Profile Pic" />
        Welcome
        {firebase.auth().currentUser.displayName}
      </Aux>
    );
  }
}

export default Home;
