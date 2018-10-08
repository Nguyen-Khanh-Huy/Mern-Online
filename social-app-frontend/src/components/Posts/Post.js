import React, { Component } from 'react';
import Axios from 'axios';

class Post extends Component {
    updatePostLike = () => {
        Axios.put('', {likes: this.props.posts.likes.push('5bac8184ebe8ac2208ba0b3c')});
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
                        <button className="btn btn-primary">{this.props.posts.likes.length} Like</button>
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

            </article>
        );
    }
}

export default Post;