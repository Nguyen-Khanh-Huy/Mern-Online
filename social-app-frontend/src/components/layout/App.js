import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import Navbar from './Navbar';

class App extends Component {
  showContent = () => {
    return routes.map((item, index) => {
      return (
        <Route
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.main}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>{this.showContent()}</Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
