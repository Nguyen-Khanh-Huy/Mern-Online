import React, { Component } from 'react';

//className="chat_list active_chat" (đã chọn)
//className="chat_list" (chưa chọn)
class Friend extends Component {
    render() {
        return (
            <div onClick={this.props.clicked}>
                <div className="chat_list">
                    <div className="chat_people">
                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                        <div className="chat_ib">
                            <h5>{this.props.friend.fullName} <span className="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Friend;