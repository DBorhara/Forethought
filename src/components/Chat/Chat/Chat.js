import React, { Component } from 'react';
import './Chat.module.css';
import Form from '../Form/Form';
import firebase from 'firebase';
import { fire, config } from '../../../config/Fire';
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

  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className={styles.chat}>
        <div className={styles.chat__header}>
          {/*<img src={logo} className="chat__logo" alt="logo" />*/}
          <h2>Leave a Message For Your Circle</h2>
          {
            <button
              className="chat__button"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </button>
          }
        </div>
        <div className="chat__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default Chat;
