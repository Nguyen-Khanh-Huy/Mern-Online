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
          <div className="col-md-5">
            <form>
              <h2>Đăng ký</h2>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label>Họ Tên đầy đủ</label>
                    <input type="text" className="form-control" placeholder="Tên của bạn" required name="true"/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email của bạn" required name="true"/>
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input type="password" className="form-control" placeholder="Password của bạn" required name="true"/>
              </div>
              <div className="form-group">
                <label>Nơi sống</label>
                <select className="form-control">
                  <option value>Nơi sống của bạn</option>
                  <option>TPHCM</option>
                  <option>Hà Nội</option>
                  <option>Khác</option>
                </select>
              </div>
              <div className="form-group">
                <label>Giới tính</label>
                <div className="row" data-toggle="buttons">
                  <div className="col">
                    <label className="btn btn-outline-secondary"> Nam
                <input type="radio" name="gioi-tinh" defaultValue="Nam" />
                    </label>
                  </div>
                  <div className="col">
                    <label className="btn btn-outline-secondary"> Nữ
                <input type="radio" name="gioi-tinh" defaultValue="Nữ" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input type="checkbox" required name="true"/>
                <label>Tôi đồng ý điều khoản sử dụng</label>
              </div>
              <div className="form-group">
                <button className="btn btn-success" type="submit">Đăng Ký</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Login);
