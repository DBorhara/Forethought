import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import MyCalendar from './components/Calendar/Calendar';
import Home from './components/Home/Home';

class Routed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/calendar" component={MyCalendar} />
        </Switch>
      </Router>
    );
  }
}

export default Routed;
