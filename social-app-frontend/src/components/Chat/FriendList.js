import React, { Component } from 'react';
import Friend from './Friend';

class FriendList extends Component {
    render() {
        return (
            <div>
                <div className="inbox_people">
                    <div className="headind_srch">
                        <div className="recent_heading">
                            <h4>Friends List</h4>
                        </div>
                        <div className="srch_bar">
                            <div className="stylish-input-group">
                                <input type="text" className="search-bar" placeholder="Search" />
                                <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="inbox_chat">
                        <Friend />
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendList;