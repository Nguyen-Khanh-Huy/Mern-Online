import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import './styleAbout.css'; 

class AboutPage extends Component {
    constructor() {
        super();

        this.user = JSON.parse(localStorage.getItem('user'));
        console.log("UserID = " + this.user._id);

        this.socket = openSocket('http://localhost:8001');
        this.state = {
            message: []
        }
        this.socket.on("server-send-mess", (data) => {
            // this.setState(previousState => ({
            //     message: [...previousState, data]
            // }))
            this.setState({
                message: this.state.message.concat([data])
            })
        });
        this.socket.on("server-send-idsocket", (data) => {
            console.log("SocketID = " + data);
            axios.put('http://localhost:8000/api/users/updateSocket', { id: this.user._id, socketid: data }).then(res => console.log(res));
            //console.log(data);
            // http://localhost:8000/api/posts
        })
    }
    chatAll = () => {
        this.socket.emit("client-send-mess", document.getElementById('txtChat').value);
    }
    loadMessage = () => {
        return this.state.message.map((mess, index) => {
            return <li key={index}>{mess}</li>
        })
    }
    /*
    console.log(this.state.message);
        return (
            <div className="col-lg-1 col-centered">
                <input type="text" id="txtChat" />
                <button onClick={() => this.chatAll()}>Click Me</button>
                <br/>
                <ul className="col-lg-2 col-centered">
                    {this.loadMessage()}
                </ul>
            </div>
        );
    */
    render() {
        return (
            <div className="container">
                <h3 className=" text-center">Messaging</h3>
                <div className="messaging">
                    <div className="inbox_msg">
                        <div className="inbox_people">
                            <div className="headind_srch">
                                <div className="recent_heading">
                                    <h4>Recent</h4>
                                </div>
                                <div className="srch_bar">
                                    <div className="stylish-input-group">
                                        <input type="text" className="search-bar" placeholder="Search" />
                                        <span className="input-group-addon">
                                            <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                                        </span> </div>
                                </div>
                            </div>
                            <div className="inbox_chat">
                                <div className="chat_list active_chat">
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat_list">
                                    <div className="chat_people">
                                        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                        <div className="chat_ib">
                                            <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
                                            <p>Test, which is a new approach to have all solutions
                  astrology under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mesgs">
                            <div className="msg_history">
                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>Test which is a new approach to have all solutions</p>
                                            <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                    </div>
                                </div>
                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Test which is a new approach to have all solutions</p>
                                        <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                                </div>
                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>Test, which is a new approach to have</p>
                                            <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                    </div>
                                </div>
                                <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Apollo University, Delhi, India Test</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span> </div>
                                </div>
                                <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                            <p>We work directly with our designers and suppliers, and sell direct to you, which means quality, exclusive products, at a price anyone can afford.</p>
                                            <span className="time_date"> 11:01 AM    |    Today</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input type="text" className="write_msg" placeholder="Type a message" />
                                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center top_spac"> Design by <a target="_blank" href="">Sunil Rajput</a></p>
                </div>
            </div>
        );
    }
}

export default AboutPage;