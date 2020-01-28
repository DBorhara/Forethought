import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MyCalendar from './components/Calendar/Calendar';
import Chat from './components/Chat/Chat/Chat';
import Home from './components/Home/Home';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import firebase from 'firebase';

class Routed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
        console.log('USER LOGGED IN');
      } else {
        console.log('NOT LOGGED IN');
      }
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />

          {this.state.isLoggedIn && (
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/calendar" component={MyCalendar} />
              <Route path="/chat" component={Chat} />
            </Switch>
          )}
        </Switch>
      </Router>
    );
  }
}

export default Routed;
