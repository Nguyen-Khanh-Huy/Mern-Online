import React, { Component } from 'react';
import PostCreate from '../Post.Create/Create';
import ListPost from '../Post.Listpost/ListPost';
import axios from 'axios';

class Center extends Component {
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

export default Center;