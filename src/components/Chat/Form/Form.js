import React, { Component } from 'react';

import './Form.module.css';
import Message from '../Message/Message';
import firebase from 'firebase';
import styles from './Form.module.css';
// import { Form } from 'react-bootstrap';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      message: '',
      list: [],
    };
    this.messageRef = firebase
      .database()
      .ref()
      .child('messages');
    this.listenMessages();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ userName: nextProps.user.displayName });
    }
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      };
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }

  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }
  listenMessages() {
    this.messageRef.limitToLast(10).on('value', message => {
      console.log(message.val());
      this.setState({
        list: Object.values(message.val()),
      });
    });
  }

  render() {
    return (
      <div className={styles.form}>
        <div className={styles.form__message}>
          {this.state.list.map((item, index) => (
            <Message key={index} message={item} />
          ))}
        </div>
        <div className={styles.form__row}>
          <input
            className={styles.form__input}
            type="text"
            placeholder="Type message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button
            className={styles.form__button}
            onClick={this.handleSend.bind(this)}
          >
            send
          </button>
        </div>
      </div>
    );
  }
}
export default Form;
