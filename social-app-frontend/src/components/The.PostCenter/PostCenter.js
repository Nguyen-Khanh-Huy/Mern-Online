import React, { Component } from 'react';

class PostCenter extends Component {
    render() {
        return (
            <div className="content__center__list-post">
                <article className="content__center__list-post__item">
                    <div className="row">
                    <div className="col-sm-1">
                        <img src="https://via.placeholder.com/100x100" width="100%" alt="" />
                    </div>
                    <div className="col-sm-11">
                        <span className="content__center__list-post__item__username">Andre Anna</span>
                        <div>9 giờ trước</div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus soluta consectetur facilis quo
                        laudantium atque, explicabo consequuntur molestias quisquam rem provident excepturi cumque nostrum
                        reiciendis quos numquam, adipisci neque error!
                    </div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-12 text-right">
                        <button className="btn btn-primary">Like</button>
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
                <article className="content__center__list-post__item" />
                <article className="content__center__list-post__item" />
                <article className="content__center__list-post__item" />
            </div>
        );
    }
}

export default PostCenter;