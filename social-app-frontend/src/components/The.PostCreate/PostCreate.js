import React, { Component } from 'react';

class PostCreate extends Component {
    render() {
        return (
            <div className="content__center__post-create">
                <div className="row">
                    <div className="col-sm-1">
                    <img src="https://via.placeholder.com/100x100" width="100%" alt="" />
                    </div>
                    <div className="col-sm-11">
                    <textarea name="txt-post-create" className="form-control" rows={3} defaultValue={""} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 text-right">
                    <button className="btn btn-primary">Post</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default PostCreate;