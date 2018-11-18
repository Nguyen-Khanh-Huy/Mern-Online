import React, { Component } from 'react';

class Right extends Component {
  render() {
    return (
      <section className="col-sm-2 content__right">
        <ul className="list-unstyled list-friend">
          <li className="list-friend__item">
            <a href="">
              <img src="" className="list-friend__item__logo" alt="" />
              <span className="list-friend__item__name">Friend_name</span>
              <span className="list-friend__item__status">
                <small>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                </small>
              </span>
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Right;