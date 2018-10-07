import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                i'm header
                <header>
                <ul className="list-unstyled header__left">
                    <li className="header__left__logo" />
                    <li className="header__left_search" />
                </ul>
                {/* end header left */}
                <ul className="list-unstyled header__right">
                    <li className="header__right__profile" />
                    <li className="header__right__notify" />
                </ul>
                {/* end header-right */}
                </header>
            </div>
        );
    }
}

export default Header;