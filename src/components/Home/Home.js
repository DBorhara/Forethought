import React, { Component } from 'react';
import { fire } from '../../config/Fire';
import Aux from '../../hoc/Aux/Aux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
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
          {fire.auth().currentUser.displayName
            ? fire.auth().currentUser.displayName
            : 'NO NAME'}
        </p>
      </Aux>
    );
  }
}

export default Home;
