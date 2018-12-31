import React, { Component } from 'react';
import axios from 'axios';
import './cssPost.css';
import ListCmt from './ListCmt';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.posts.likes.length,
            binhluan: "",
            listPost: [],
        }
        axios.get('http://localhost:8000/api/posts').then(res => {
            this.setState({
                listPost: res.data
            })
        })
        //axios.get('http://localhost:8000/api/posts').then(res => console.log(res.data))

        // axios.get(`http://localhost:8000/api/posts/${this.props.posts._id}`, { likes: likes })
        // .then(res => {
        //     this.setState({
        //         like: this.props.posts.likes.length
        //     })
        // })
    }
    renderPost = (listPost) => {
        return listPost.map(posts => {
            return <ListCmt key={posts._id} posts={posts} /> // Props = posts (posts đầu). posts sau = dữ liệu bảng posts
        })
    }
    updatePostLike = () => {
        const userStringify = localStorage.getItem('user');
        const user = JSON.parse(userStringify);

        console.log(this.props.posts.likes);
        var likes = this.props.posts.likes.concat([user._id]);
        console.log(likes);

        axios.put(`http://localhost:8000/api/posts/${this.props.posts._id}`, { likes: likes })
            .then(res => this.setState({
                like: this.state.like + 1
            }));
    }
    comments = () => {
        const userStringify = localStorage.getItem('user');
        const user = JSON.parse(userStringify);
        // console.log(user._id);
        const scmt = this.props.posts.someonecomments.concat([user.userName]);
        const cmt = this.props.posts.comments.concat([this.state.binhluan]);
        console.log(this.state.binhluan)
        console.log(user.userName)

        axios.put(`http://localhost:8000/api/posts/${this.props.posts._id}`, { someonecomments: scmt, comments: cmt })
            .then(res => {
                //window.location.reload();
                this.setState({
                    binhluan: ''
                })
                //document.getElementById('txtPost').value = '';
            });
    }
    /*
    <div className="row">
                    <div className="col-sm-1">
                        <img src="https://via.placeholder.com/100x100" width="100%" alt="" />
                    </div>
                    <div className="col-sm-11">
                        <span className="content__center__list-post__item__username">{this.props.posts.postBy.fullName}</span>
                        <div>9 giờ trước</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        {this.props.posts.content}
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 text-right">
                        <button className="btn btn-primary" onClick={() => this.updatePostLike()}>{this.state.like} Like</button>
                        <button className="btn btn-primary">Bình luận</button>
                    </div>
                </div>



                <input type="text" placeholder="Your comment here..." className="form-control" value={this.state.binhluan} onChange={evt => this.setState({ binhluan: evt.target.value })} />
                <button className="btn btn-primary" onClick={() => this.comments()}>Gửi Bình Luận</button>
    */
    render() {
        //const { content, postBy } = this.props.post;
        return (
            <article className="content__center__list-post__item mb-4">
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="panel panel-white post panel-shadow">
                                <div className="post-heading">
                                    <div className="pull-left image">
                                        <img src="http://bootdey.com/img/Content/avatar/avatar3.png" className="img-circle avatar" alt="" />
                                    </div>
                                    <div className="pull-left meta">
                                        <div className="title h5">
                                            <a href=""><h1>{this.props.posts.postBy.userName}</h1></a>
                                        </div>
                                        <h6 className="text-muted time">37 minute ago</h6>
                                    </div>
                                </div>

                                <div className="post-description">
                                    <div className="col-sm-8">
                                        <h5>{this.props.posts.content}</h5>
                                        {/* {this.renderPost(this.state.listPost)} */}
                                    </div>
                                </div>

                                <div className="post-description">
                                    <div className="timeline-likes">
                                        <div className="stats-right">
                                            <span className="stats-text">17 Shares</span>
                                            <span className="stats-text">3 Comments</span>
                                        </div>
                                        <div className="stats">
                                            <span className="fa-stack fa-fw stats-icon">
                                                <i className="fa fa-circle fa-stack-2x text-danger" />
                                                <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1" />
                                            </span>
                                            <span className="fa-stack fa-fw stats-icon">
                                                <i className="fa fa-circle fa-stack-2x text-primary" />
                                                <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
                                            </span>
                                            <span className="stats-total">{this.state.like}</span>
                                        </div>
                                    </div>
                                    <div className="timeline-footer">
                                        <button className="btn btn-default btn-xs" onClick={() => this.updatePostLike()}><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</button>
                                        <button className="btn btn-default btn-xs"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</button>
                                        <button className="btn btn-default btn-xs"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</button>
                                    </div>
                                    <hr />

                                    <div className="panel rounded shadow">
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="https://via.placeholder.com/32x32" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <span className="content__center__list-post__item__username"> <span className="text-danger">David Jame</span> {this.props.posts.comments}</span>
                                            </div>
                                        </div>
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="https://via.placeholder.com/32x32" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <span className="content__center__list-post__item__username"><span className="text-danger">Anna</span> THIS IS COMMENT</span>
                                            </div>
                                        </div>
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="https://via.placeholder.com/32x32" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <span className="content__center__list-post__item__username"><span className="text-danger">Lorris</span> THIS IS COMMENT</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-comment-post">
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="http://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <input type="text" placeholder="Your comment here..." className="form-control" value={this.state.binhluan} onChange={evt => this.setState({ binhluan: evt.target.value })} />
                                                <button className="btn btn-primary" onClick={() => this.comments()}>Gửi Bình Luận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Post;

/*
                                <div className="post-description">
                                    <p>{this.props.posts.content}</p>
                                    <div className="container">
                                        <div className="pull-right btn-group-xs">
                                            <button className="btn btn-default btn-xs" onClick={() => this.updatePostLike()}><i className="fa fa-heart" aria-hidden="true"></i> {this.state.like} Like</button>
                                            <button className="btn btn-default btn-xs"><i className="fa fa-comment" aria-hidden="true"></i> Comment</button>
                                            <button className="btn btn-default btn-xs"><i className="fa fa-retweet" aria-hidden="true"></i> Share</button>
                                        </div>
                                    </div>
                                    <div className="list-comment">
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="https://via.placeholder.com/32x32" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <span className="content__center__list-post__item__username"> <span className="text-danger">David Jame</span>{this.props.posts.comments}</span>
                                            </div>
                                        </div>
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="https://via.placeholder.com/32x32" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <span className="content__center__list-post__item__username"><span className="text-danger">Anna</span> THIS IS COMMENT</span>
                                            </div>
                                        </div>
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="https://via.placeholder.com/32x32" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <span className="content__center__list-post__item__username"><span className="text-danger">Lorris</span> THIS IS COMMENT</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-comment-post">
                                        <div className="row list-comment-item mt-2">
                                            <div className="col-sm-1 text-right">
                                                <img src="https://via.placeholder.com/32x32" alt="" />
                                            </div>
                                            <div className="col-sm-11">
                                                <input type="text" placeholder="Your comment here..." className="form-control" value={this.state.binhluan} onChange={evt => this.setState({ binhluan: evt.target.value })} />
                                                <button className="btn btn-primary" onClick={() => this.comments()}>Gửi Bình Luận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
*/