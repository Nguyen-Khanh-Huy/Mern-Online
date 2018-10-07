import React, { Component } from 'react';
import Left from '../components/The.Left/Left';
// import PostCreate from '../components/The.PostCreate/PostCreate';
import PostCenter from '../components/The.PostCenter/PostCenter';
import Right from '../components/The.Right/Right';

class HomePage extends Component {
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