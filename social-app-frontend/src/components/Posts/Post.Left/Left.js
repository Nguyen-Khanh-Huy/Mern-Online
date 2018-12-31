import React, { Component } from 'react';

class Left extends Component {
    render() {
        return (
            <div className="col-lg-2">
                <div className="panel rounded shadow">
                    <div className="card">
                        <div className="card-body text-center bg-primary rounded-top">
                            <div className="user-box">
                                <img src="http://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar" />
                            </div>
                            <h5 className="mb-1 text-white">Jhon Doe</h5>
                            <h6 className="text-light">UI/UX Engineer</h6>
                        </div>
                        <div className="card-body">
                            <ul className="list-group shadow-none">
                                <li className="list-group-item">
                                    <div className="list-icon">
                                        <i className="fa fa-phone-square" />
                                    </div>
                                    <div className="list-details">
                                        <span>9910XXXXXX</span>
                                        <small>Mobile Number</small>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="list-icon">
                                        <i className="fa fa-envelope" />
                                    </div>
                                    <div className="list-details">
                                        <span>info@example.com</span>
                                        <small>Email Address</small>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="list-icon">
                                        <i className="fa fa-globe" />
                                    </div>
                                    <div className="list-details">
                                        <span>www.example.com</span>
                                        <small>Website Address</small>
                                    </div>
                                </li>
                            </ul>
                            <div className="row text-center mt-4">
                                <div className="col p-2">
                                    <h4 className="mb-1 line-height-5">154</h4>
                                    <small className="mb-0 font-weight-bold">Projects</small>
                                </div>
                                <div className="col p-2">
                                    <h4 className="mb-1 line-height-5">2.2k</h4>
                                    <small className="mb-0 font-weight-bold">Followers</small>
                                </div>
                                <div className="col p-2">
                                    <h4 className="mb-1 line-height-5">9.1k</h4>
                                    <small className="mb-0 font-weight-bold">Views</small>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>
        );
    }
}

export default Left;