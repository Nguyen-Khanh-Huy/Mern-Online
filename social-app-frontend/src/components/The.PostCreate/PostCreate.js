import React, { Component } from 'react';
import axios from 'axios';

class PostCreate extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      postBy: '5bac7b63d819fa1053d0428c'
    };
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }
  newPost = () => {
    axios
      .post('http://localhost:8000/api/posts', {
        content: this.state.content,
        postBy: this.state.postBy
      })
      .then(res => {
        this.props.onPostCreate(res.data);
        this.setState({
          content: ''
        });
        document.getElementById('txtContent').value = '';
      });
  };
  handleChangeContent = event => {
    this.setState({ content: event.target.value });
  };
  render() {
    return (
      <div className="content__center__post-create">
        <div className="row">
          <div className="col-sm-1">
            <img
              src="https://via.placeholder.com/100x100"
              width="100%"
              alt=""
            />
          </div>
          <div className="col-sm-11">
            <textarea
              id="txtContent"
              name="txt-post-create"
              className="form-control"
              rows="3"
              onChange={this.handleChangeContent}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 text-right">
            <button className="btn btn-primary" onClick={() => this.newPost()}>
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCreate;
