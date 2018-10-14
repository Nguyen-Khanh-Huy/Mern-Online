import React, { Component } from 'react';
import openSocket from 'socket.io-client';


class AboutPage extends Component {
    constructor() {
        super();
        this.socket = openSocket('http://localhost:8001');
        this.state = {
            message: []
        }
        this.socket.on("server-send-mess", (data) => {
            // console.log("Reply: " + data);
            // this.setState(previousState => ({
            //     message: [...previousState, data]
            // }))
            this.setState({
                message: this.state.message.concat([data])
            })
        });
        //const socket = openSocket('http://localhost:8001');
        //socket.emit('sendmess', { data: 'test' });
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

                <ul>
                    {this.loadMessage()}
                </ul>
            </div>
        );
    }
}

export default AboutPage;