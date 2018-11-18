import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.posts.likes.length
        }
        // axios.get(`http://localhost:8000/api/posts/${this.props.posts._id}`, { likes: likes })
        // .then(res => {
        //     this.setState({
        //         like: this.props.posts.likes.length
        //     })
        // })
    }
    updatePostLike = () => {
        console.log(this.props.posts.likes);
        var likes = this.props.posts.likes.concat(['5be00a2f75906148b020fec5']);
        console.log(likes);

        axios.put(`http://localhost:8000/api/posts/${this.props.posts._id}`, { likes: likes })
            .then(res => this.setState({
                like: this.state.like + 1
            }));
    }
    render() {
        //const { content, postBy } = this.props.post;
        return (
            <article className="content__center__list-post__item mb-4">
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
                <div className="list-comment">
                    <div className="row list-comment-item mt-2">
                        <div className="col-sm-1 text-right">
                            <img src="https://via.placeholder.com/32x32" alt="" />
                        </div>
                        <div className="col-sm-11">
                            <span className="content__center__list-post__item__username"> <span className="text-danger">David Jame</span> THIS IS COMMENT</span>
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
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <hr />
            </article>
        );
    }
}

export default Post;