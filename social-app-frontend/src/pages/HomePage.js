import React, { Component } from 'react';
import Left from '../components/The.Left/Left';
// import PostCreate from '../components/The.PostCreate/PostCreate';
import PostCenter from '../components/The.PostCenter/PostCenter';
import Right from '../components/The.Right/Right';

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
                <PostCenter />
                <Right />
            </div>
        );
    }
}

export default HomePage;