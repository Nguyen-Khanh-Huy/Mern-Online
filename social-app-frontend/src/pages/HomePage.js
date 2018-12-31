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

    qeqe = () => {
        // const userStringify = localStorage.getItem('user');
        // const user = JSON.parse(userStringify);
        // console.log(user._id);
        var date = new Date();
        console.log( date.getHours()+" Giờ",date.getMinutes()+" Phút -",date.getDate()+"/",date.getMonth()+"/",date.getFullYear() );
    }

    render() {
        return (
            <div className="content row">
                <Left />
                <Center />
                <Right />
                {/* <button className="btn" onClick={() => this.qeqe()}>
                    Loginaaa
                 </button> */}
            </div>
        );
    }
}

export default HomePage;