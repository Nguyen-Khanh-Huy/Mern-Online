import React, { Component } from 'react';
import PostCreate from '../The.PostCreate/PostCreate';
import ListPost from '../Posts/ListPost';
import axios from 'axios';

class PostCenter extends Component {
  constructor() {
    super();
    this.state = {
      listPost: []
    }
    axios.get('http://localhost:8000/api/posts').then(res => {
      //console.log(res.data)
      this.setState({
        listPost: res.data  // Khi vào sẽ show ra listpost
      })
    })
  }
  onPostCreate = (resdata) => {
    axios.get('http://localhost:8000/api/posts').then(res => {
      this.setState({
        listPost: res.data  // Khi bấm post sẽ set lại listpost
      });
    });
  };

  render() {
    return (
      <section className="col-sm-8 content__center">
        <PostCreate onPostCreate={this.onPostCreate} />
        <ListPost listPost={this.state.listPost} />
      </section>
    );
  }
}

export default PostCenter;