import React, { Component } from 'react';
import './Chat.module.css';
import Form from '../Form/Form';
import firebase from 'firebase';
import styles from './Chat.module.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div className={styles.chat}>
        <div className={styles.chat__header}>
          <h2>
            Stackathon Demo: OAuth in at
            https://forethought-149c2.firebaseapp.com/#/home
          </h2>
        </div>
        <div className={styles.chat__list}>
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default Chat;
