import React, { Component } from 'react';
import { fire } from '../../../config/Fire';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Aux from '../../../hoc/Aux/Aux';
import firebase from 'firebase';

class OAuthButton extends Component {
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.ca,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {});
  }

  render() {
    return (
      <Aux>
        <StyledFireBaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={fire.auth()}
        ></StyledFireBaseAuth>
      </Aux>
    );
  }
}

export default OAuthButton;
