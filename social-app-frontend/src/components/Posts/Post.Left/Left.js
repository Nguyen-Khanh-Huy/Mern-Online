import React, { Component } from 'react';

class Left extends Component {
    render() {
        return (
            <section className="col-sm-2 content__left">
                <ul className="list-unstyled content__left__list-menu">
                    <li className="content__left__list-menu__item">
                        <a href="">Profile</a>
                    </li>
                    <li className="content__left__list-menu__item">
                        <a href="">New feeds</a>
                    </li>
                    <li className="content__left__list-menu__item">
                        <a href="">Messages</a>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Left;