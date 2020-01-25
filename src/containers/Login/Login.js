import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/Fire';
import OAuthButton from '../../components/UI/OAuthButton/OAuthButton';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  signup = event => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <form>
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
            <small>We'll never share your email with anyone else.</small>
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
          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button
            onClick={this.signup}
            style={{ marginLeft: '25px' }}
            className="btn btn-success"
          >
            Signup
          </button>
          <OAuthButton />
        </form>
      </div>
    );
  }
}
export default Login;
