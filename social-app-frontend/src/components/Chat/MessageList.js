import React, { Component } from 'react';
import SentText from './SentText';
import Message from './Message';

class MessageList extends Component {
    render() {
        return (
            <div>
                <div className="mesgs">
                    <div className="msg_history">
                        <Message />
                    </div>
                    <SentText />
                </div>
            </div>
        );
    }
}

export default MessageList;