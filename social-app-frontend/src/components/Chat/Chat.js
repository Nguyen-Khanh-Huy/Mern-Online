import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import './styleChat.css';
import FriendList from './FriendList';
import MessageList from './MessageList';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <h1 className=" text-center">Messaging</h1>
                <div className="messaging">
                    <div className="inbox_msg">
                        <FriendList />
                        <MessageList />
                    </div>
                    <p className="text-center top_spac"> Design by <a target="_blank" href="">PIS.Huy</a></p>
                </div>
            </div>
        );
    }
}

export default Chat;