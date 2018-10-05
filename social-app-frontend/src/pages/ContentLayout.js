import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

class ContentLayout extends Component {
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
    return <Switch>{this.showContent()}</Switch>;
  }
}

export default ContentLayout;
