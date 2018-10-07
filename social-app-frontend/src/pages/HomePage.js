import React, { Component } from 'react';
import Left from '../components/The.Left/Left';
import PostCreate from '../components/The.PostCreate/PostCreate';
import PostCenter from '../components/The.PostCenter/PostCenter';
import Right from '../components/The.Right/Right';

class HomePage extends Component {
    render() {
        return (
            <div className="content row">
                <section className="col-sm-2 content__left">
                    <Left /> 
                </section>
                <section className="col-sm-8 content__center">
                    <PostCreate />
                    <PostCenter />
                </section>
                <section className="col-sm-2 content__right">
                    <Right />
                </section>
            </div>
        );
    }
}

export default HomePage;