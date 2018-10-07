import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

      <header>
        {/* day la header */}
        <ul className="list-unstyled header__left">
          <li className="header__left__logo"></li>
          <li className="header__left_search"></li>
        </ul>

        <ul className="list-unstyled header__right">
          <li className="header__right__profile"></li>
          <li className="header__right__notify"></li>
        </ul>

      </header>

    );
  }
}

export default Header;