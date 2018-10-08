import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

class ListPost extends Component {
  renderPost = listPost => {
    return listPost.map(post => {
      return (
        <Post key={post._id} post={post}>
          {' '}
        </Post>
      ); // Props = post (post đầu). post sau = dữ liệu bảng post
    });
  };
  render() {
    return (
      <div className="content__center__list-post">
        {this.renderPost(this.props.listPost)}
      </div>
    );
  }
}

export default ListPost;
