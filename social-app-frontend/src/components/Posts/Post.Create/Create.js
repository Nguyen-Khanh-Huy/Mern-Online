import React, { Component } from 'react';
import axios from 'axios';

class PostCreate extends Component {
  constructor() {
    super();
    // lấy id người đăng bài
    const userStringify = localStorage.getItem('user');
    const user = JSON.parse(userStringify);
    //console.log(user._id);

    this.state = {
      content: '',
      imageUrl: '',
      postBy: user._id,
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
      { content: this.state.content, imageUrl: this.state.imageUrl, postBy: this.state.postBy, someonecomments: "", comments: "" }).then(res => {
        console.log(res.data)
        this.props.onPostCreate(res.data);
        this.setState({
          content: ''
        })
        document.getElementById('txtPost').value = '';
      })
  }
  /*
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
            <button className="btn btn-primary" onClick={() => this.newPost()}>Post</button>
          </div>
        </div>
  */
  render() {
    return (
      <div className="content__center__post-create">
        <div className="panel rounded shadow">
          <form action="...">
            <textarea id="txtPost" onChange={() => this.onChangeContent()} className="form-control input-lg no-border" rows={2} placeholder="What are you doing?..." defaultValue={""} />
          </form>
          <div>
            <button onClick={() => this.newPost()} className="btn btn-success pull-right mt-5">___POST___</button>
          </div>
          <div className="panel-footer">
            <ul className="nav nav-pills">
              <li><a href=""><i className="fa fa-user" /></a></li>
              <li><a href=""><i className="fa fa-map-marker" /></a></li>
              <li><a href=""><i className="fa fa-camera" /></a></li>
              <li><a href=""><i className="fa fa-smile-o" /></a></li>
            </ul>
          </div>

        </div>
      </div>

    );
  }
}

export default PostCreate;