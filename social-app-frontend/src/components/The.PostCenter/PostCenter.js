import React, { Component } from 'react';
import PostCreate from '../The.PostCreate/PostCreate';
import ListPost from '../Posts/ListPost';

class PostCenter extends Component {
  render() {
    return (
      <section className="col-sm-8 content__center">
        <PostCreate />
        <ListPost />
      </section>
    );
  }
}

export default PostCenter;