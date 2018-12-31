import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import './styleLogin.css';

class Login extends Component {
  constructor(props) {
    super(props);
    localStorage.clear();       // Xóa dữ liệu localStorage khi đăng xuất
  }
  onLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:8000/api/users/login', { email, password })
      .then(res => {
        var userString = JSON.stringify(res.data.user); // JavaScript Object thành JSON String (JSON.parse ngược lại)
        localStorage.setItem('token', res.data.token);  // local Storage: lưu trữ dữ liệu mà ko có thời hạn.
        localStorage.setItem('user', userString);       // session Storage: sẽ mất khi tab hiện tại bị đóng.
        // window.location.href = "/home";
        alert('Đăng Nhập Thành Công');
        this.props.history.push('/home');
      })
      .catch(err => {
        alert('Đăng Nhập Thất Bại');
        console.log(err);
      });
  }
  onSignup = () => {
    const email2 = document.getElementById('email2').value;
    const username2 = document.getElementById('username2').value;
    const password2 = document.getElementById('password2').value;
    const fullname2 = document.getElementById('fullname2').value;

    axios.post('http://localhost:8000/api/users/signup', {
      email: email2,
      userName: username2,
      fullName: fullname2,
      password: password2,
      socketid: "0",
      role: "0",
      friends: [],
      numberPhone: "0",
      home: "None",
      living: "None",
      birthDay: "None",
      sex: "None",
      religion: "None",
      educationLevel: "None",
      statuss: "None"
    }).then(res => {
      alert('Đăng Ký Thành Công');
      window.location.reload();
    })
      .catch(err => {
        alert('Đăng Ký Thất Bại');
        console.log(err);
      });
  }
  /*<div>
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
                        <input type="email" tabIndex={1} className="form-control" placeholder="Email" id="email" />
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
                    <form id="register-form" method="post" style={{ display: 'none' }}>
                      <div className="form-group">
                        <input type="email" tabIndex={1} className="form-control" placeholder="Email Address" id="email2" />
                      </div>
                      <div className="form-group">
                        <input type="text" tabIndex={1} className="form-control" placeholder="Full Name" id="fullname2" />
                      </div>
                      <div className="form-group">
                        <input type="text" tabIndex={1} className="form-control" placeholder="Nick Name" id="username2" />
                      </div>
                      <div className="form-group">
                        <input type="password" tabIndex={2} className="form-control" placeholder="Password" id="password2" />
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-6 col-sm-offset-3">
                            <input onClick={() => this.onSignup()} name="register-submit" id="register-submit" tabIndex={4} className="form-control btn btn-register" defaultValue="Sign Up" />
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
/*
                      <div className="form-group">
                        <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
                      </div>
*/
export default withRouter(Login);
