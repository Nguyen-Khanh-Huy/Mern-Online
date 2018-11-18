import React, { Component } from 'react';
import Post from './Post';

class ListPost extends Component {
    renderPost = (listPost) => {
        return listPost.map(posts => {
            return <Post key={posts._id} posts={posts} /> // Props = posts (posts đầu). posts sau = dữ liệu bảng posts
        })
    }
    render() {
        //const { listPost } = this.state;
        return (
            <div className="content__center__list-post">
                {this.renderPost(this.props.listPost)}
            </div>
        );
    }
}

export default ListPost;