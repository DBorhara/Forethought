import React, { Component } from 'react';
import { fire } from '../../../config/Fire';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class GuestNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = event => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {})
      .catch(error => {
        console.log(error);
      });
  };

  signup = event => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Project Forethought</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#demo">Demo</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Circles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Squares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Triangles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Pentagons</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link onClick={this.login}>Login</Nav.Link>
            <Nav.Link eventKey={2} href="">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default GuestNavbar;
