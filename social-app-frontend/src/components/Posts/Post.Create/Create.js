import React, { Component } from 'react';
import axios from 'axios';

class PostCreate extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      imageUrl: '',
      postBy: '5be009dc75906148b020fec4',
    }
    //this.onChangeContent = this.onChangeContent.bind(this);
  }
  onChangeContent = () => {
    //console.log(document.getElementById('txtPost').value);
    this.setState({
      content: document.getElementById('txtPost').value
    })
    // this.setState({
    //   content: event.target.value
    // })
  } 
  newPost = () => {
    axios.post('http://localhost:8000/api/posts', 
    { content: this.state.content, imageUrl: this.state.imageUrl, postBy: this.state.postBy }).then(res => {
      console.log(res.data)
      this.props.onPostCreate(res.data);
      this.setState({
        content: ''
      })
      document.getElementById('txtPost').value = '';
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
            <textarea name="txt-post-create" className="form-control" rows="3" id="txtPost" onChange={() => this.onChangeContent()}></textarea>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 text-right">
            <button className="btn btn-primary" onClick={ () => this.newPost() }>Post</button>
          </div>
        </div>
      </div>

    );
  }
}

export default PostCreate;