import React, { Component } from 'react';
import styles from './Message.module.css';

class Message extends Component {
  render() {
    return (
      <div className={styles.message}>
        <span className={styles.message__author}>
          {this.props.message.userName}:
        </span>
        {this.props.message.message}
      </div>
    );
  }
}

export default Message;
