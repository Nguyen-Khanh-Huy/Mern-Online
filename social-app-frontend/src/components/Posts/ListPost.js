import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

class ListPost extends Component {
    constructor() {
        super();
        this.state = {
            listPost: []
        }
        axios.get('http://localhost:8000/api/posts').then(res => {
            //console.log(res.data)
            this.setState({
                listPost: res.data
            })
        })
    }
    renderPost = (listPost) => {
        return listPost.map(post => {
            return <Post key={post._id} post={post}> </Post> // Props = post (post đầu). post sau = dữ liệu bảng post
        })
    }
    render() {
        const { listPost } = this.state;
        return (
            <div className="content__center__list-post">
                {this.renderPost(listPost)}
            </div>
        );
    }
}

export default ListPost;