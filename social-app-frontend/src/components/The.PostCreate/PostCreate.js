import React, { Component } from 'react';
import axios from 'axios';

class PostCreate extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      postBy: '5bac8184ebe8ac2208ba0b3c'
    }
  }
  newPost = () => {
    this.setState({
      content: document.getElementById('textBox').value
    })
    //console.log(this.state.content)
    axios.post('http://localhost:8000/api/posts', { content: this.state.content, postBy: this.state.postBy }).then(res => {
      //console.log(res.data)
    })
  }
  render() {
    //var laytext = document.getElementById('textBox').value;
    return (
      <div className="content__center__post-create">
        <div className="row">
          <div className="col-sm-1">
            <img src="https://via.placeholder.com/100x100" width="100%" alt="" />
          </div>
          <div className="col-sm-11">
            <textarea name="txt-post-create" className="form-control" rows="3" id="textBox"></textarea>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 text-right">
            <button className="btn btn-primary" onClick={() => this.newPost()}>Post</button>
          </div>
        </div>
      </div>

    );
  }
}

export default PostCreate;