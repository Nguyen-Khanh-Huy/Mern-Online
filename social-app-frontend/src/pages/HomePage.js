import React, { Component } from 'react';
import Left from '../components/Posts/Post.Left/Left';
import Center from '../components/Posts/Post.Center/Center';
import Right from '../components/Posts/Post.Right/Right';

class HomePage extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        const userStringify = localStorage.getItem('user');
        const user = JSON.parse(userStringify);
        console.log(token, user);
    }
    
    render() {
        return (
            <div className="content row">
                <Left />
                <Center />
                <Right />
            </div>
        );
    }
}

export default HomePage;