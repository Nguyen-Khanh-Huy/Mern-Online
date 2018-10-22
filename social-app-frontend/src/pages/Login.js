import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  onLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:8000/api/users/login', { email, password })
      .then(res => {
        var userString = JSON.stringify(res.data.user); // JavaScript Object thành JSON String (JSON.parse ngược lại)
        localStorage.setItem('token', res.data.token); //( localStorage, sessionStorage )
        localStorage.setItem('user', userString);
        // window.location.href = "/home";
        this.props.history.push('/home');
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="email" id="email" />
        <input type="text" placeholder="password" id="password" />
        <button className="btn" onClick={() => this.onLogin()}>
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
