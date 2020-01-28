import React, { Component } from 'react';
import { fire } from '../../config/Fire';
import OAuthButton from '../../components/UI/OAuthButton/OAuthButton';
import styles from './Login.module.css';
import { Button } from 'react-bootstrap';

// import UserNavbar from '../../components/Navbar/UserNavBar/UserNavbar';

class Login extends Component {
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
      <div>
        <form className={styles.Login}>
          <div>
            <label>Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <Button type="submit" onClick={this.login}>
            Login
          </Button>
          <Button
            onClick={this.signup}
            style={{ marginLeft: '25px' }}
            className="btn btn-success"
          >
            Signup
          </Button>
          <OAuthButton />
        </form>
      </div>
    );
  }
}
export default Login;
