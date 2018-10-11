import React, { Component } from 'react';
import routes from '../../routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

class App extends Component {
  showMenu = () => {
    let result = null;
    result = routes.map((item, index) => {
      return (
        <Route key={index} path={item.path} exact={item.exact} component={item.main} /> // index = vtri Array . item = ptu Array
      )
      // https://techmaster.vn/posts/34419/huong-dan-react-router-v4-dieu-huong-cho-ung-dung-react
    })
    return result;
  }
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div className="App">
            <Switch>{this.showMenu()}</Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
