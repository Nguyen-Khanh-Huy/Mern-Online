import React, { Component } from 'react';

class Right extends Component {
    render() {
        return (
            <div>
                <ul className="list-unstyled">
                <li className="list-friend__item">
                    <a href="">
                    <img src="" className="list-friend__item__logo" alt="" />
                    <span className="list-friend__item__name"> Friend_name </span>
                    <span className="list-friend__item__status">
                        <small>
                        <i className="fa fa-circle" aria-hidden="true" />
                        </small>
                    </span>
                    </a>
                </li>
                </ul>
            </div>
        );
    }
}

export default Right;