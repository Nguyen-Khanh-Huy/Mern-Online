import React, { Component } from 'react';
import routes from '../../routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '../Menu/Menu';

class App extends Component {
  showMenu = () => {
    let result = null;
    result = routes.map((item, index) => {
      return (
        <Route key={index} path={item.path} exact={item.exact} component={item.main} /> // index = vtri Array . item = ptu Array
      )
    })
    return result;
  }
  render() {
    return (
      <div>
        <Menu />
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
