import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import './styleLogin.css'; 
 
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
  };/*<div>
  <input type="text" placeholder="email" id="email" />
  <input type="text" placeholder="password" id="password" />
  <button className="btn" onClick={() => this.onLogin()}>
    Login
  </button>
</div>*/
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row">
                  <div className="col-xs-6">
                    <a href="" className="active" id="login-form-link">Login</a>
                  </div>
                  <div className="col-xs-6">
                    <a href="" id="register-form-link">Sign Up</a>
                  </div>
                </div>
                <hr />
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    <form id="login-form" method="post" style={{ display: 'block' }}>
                      <div className="form-group">
                        <input type="email" tabIndex={1} className="form-control" placeholder="Username" id="email" />
                      </div>
                      <div className="form-group">
                        <input type="password" tabIndex={2} className="form-control" placeholder="Password" id="password" />
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-sm-offset-3">
                            <input onClick={() => this.onLogin()} name="login-submit" id="login-submit" tabIndex={4} className="form-control btn btn-login" defaultValue="Log In" />
                          </div>
                        </div>
                      </div>
                    </form>
                    <form id="register-form" action="https://phpoll.com/register/process" method="post" style={{ display: 'none' }}>
                      <div className="form-group">
                        <input type="text" tabIndex={1} className="form-control" placeholder="Username" />
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" tabIndex={1} className="form-control" placeholder="Email Address" />
                      </div>
                      <div className="form-group">
                        <input type="password" tabIndex={2} className="form-control" placeholder="Password" />
                      </div>
                      <div className="form-group">
                        <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-sm-offset-3">
                            <input type="submit" name="register-submit" id="register-submit" tabIndex={4} className="form-control btn btn-register" defaultValue="Register Now" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
