import React, { Component } from 'react';
import MyCalendar from '../../Calendar/Calendar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios from 'axios';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

class UserNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    console.log('User Name');
  }

  handleLogoutClick = () => {
    axios.delete();
    this.props.logoutHandler();
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Project Forethought</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#calendar">Calendar</Nav.Link>
            <Nav.Link href="#tasks">Tasks</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Circles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Squares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Triangles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Chat</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#myAccount">My Account</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => this.handleLogoutClick()}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// onClick={() => this.handleLogoutClick()
export default UserNavbar;
