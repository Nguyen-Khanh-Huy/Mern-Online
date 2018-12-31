import React, { Component } from 'react';
import Friend from './Friend';
import axios from 'axios';

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            listFriend: [],
            idSelected: null
        }
        let user = localStorage.getItem('user');
        let userObj = JSON.parse(user);
        axios.post('http://localhost:8000/api/users/friends' ,{users: userObj.friends}).then(res => {
            //console.log(res)
            this.setState({
                listFriend: res.data
            })
        })
    }
    renderFriend = (listFriend) => {
        return listFriend.map(friend => {console.log(this.state.idSelected);
            return <Friend key={friend._id} friend={friend} clicked={() => this.setState({idSelected: friend._id})}/>
        })
    }
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
                        {this.renderFriend(this.state.listFriend)}
                    </div>
                </div>
            </div>
        );
    }
}

export default FriendList;