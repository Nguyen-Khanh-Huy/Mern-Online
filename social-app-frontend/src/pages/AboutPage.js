import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import axios from 'axios';

class AboutPage extends Component {
    constructor() {
        super();

        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user._id);

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
            console.log(data);
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
    render() {
        console.log(this.state.message);
        return (
            <div className="col-lg-1 col-centered">
                <input type="text" id="txtChat" />
                <button onClick={() => this.chatAll()}>Click Me</button>

                <ul className="col-lg-2 col-centered">
                    {this.loadMessage()}
                </ul>
            </div>
        );
    }
}

export default AboutPage;