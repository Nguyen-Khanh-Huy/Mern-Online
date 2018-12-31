import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import './styleProfile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        const userStringify = localStorage.getItem('user');
        const user = JSON.parse(userStringify);
        this.state = {
            userName: user.userName,
            email: user.email,
            numberPhone: user.numberPhone,
            fullName: user.fullName,
            birthDay: user.birthDay,
            sex: user.sex,
            religion: user.religion,
            statuss: user.statuss,
            home: user.home,
            living: user.living,
            educationLevel: user.educationLevel,

            file: '',
            imagePreviewUrl: ''
        }
        console.log(this.state.userName);
    }
    _handleImageChange(e) {
        //e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
        console.log(e.target.files[0]);
    }
    render() {
        return (
            <div className="container bootstrap snippets">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <div className="panel rounded shadow">
                            <div className="panel-body">
                                <div className="inner-all">
                                    <ul className="list-unstyled">
                                        <li className="text-center">
                                            <img data-no-retina className="img-circle img-responsive img-bordered-primary" src={this.state.imagePreviewUrl} alt="John Doe" />
                                        </li>
                                        <li className="text-center">
                                            <h1 className="text-capitalize">{this.state.userName}</h1>
                                        </li>
                                        <li><br /></li>
                                        <li>
                                            <div className="btn-group-vertical btn-block">
                                                <input className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)} />
                                                <a href="" className="btn btn-default"><i className="fa fa-cog pull-right" />Edit Account</a>
                                                <a href="" className="btn btn-default"><i className="fa fa-sign-out pull-right" />Logout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/* /.panel */}
                        <div className="panel panel-theme rounded shadow">
                            <div className="panel-heading">
                                <div className="pull-left">
                                    <h3 className="panel-title text-danger">Profile</h3>
                                </div>
                                <div className="pull-right">
                                    <a href="" className="btn btn-sm btn-success"><i className="fa fa-twitter" /></a>
                                    <a> </a>
                                    <a href="" className="btn btn-sm btn-success"><i className="fa fa-google-plus" /></a>
                                </div>
                                <div className="clearfix" />
                            </div>
                            <div className="panel-body no-padding rounded">
                                <ul className="list-group no-margin">
                                    <li className="list-group-item"><i className="fa fa-envelope mr-5" /><h6>Email:  {this.state.email}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-phone mr-5" /><h6>Số Điện Thoại:  {this.state.numberPhone}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-user mr-5" /><h6>Họ và Tên:  {this.state.fullName}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-birthday-cake mr-5" /><h6>Ngày Sinh:  {this.state.birthDay}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-venus-mars mr-5" /><h6>Giới Tính:  {this.state.sex}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-group mr-5" /><h6>Tôn Giáo:  {this.state.religion}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-heart mr-5" /><h6>Tình Trạng:  {this.state.statuss}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-map-marker mr-5" /><h6>Quê Quán:  {this.state.home}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-home mr-5" /><h6>Nơi Ở Hiện Tại:  {this.state.living}</h6></li>
                                    <li className="list-group-item"><i className="fa fa-mortar-board mr-5" /><h6>Trình Độ Học Vấn:  {this.state.educationLevel}</h6></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8">
                        <div className="profile-cover">
                            <div className="cover rounded shadow no-overflow">
                                <div className="inner-cover">
                                    {/* Start offcanvas btn group menu: This menu will take position at the top of profile cover (mobile only). */}
                                    <div className="btn-group cover-menu-mobile hidden-lg hidden-md">
                                        <button type="button" className="btn btn-theme btn-sm dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bars" />
                                        </button>
                                        <ul className="dropdown-menu pull-right no-border" role="menu">
                                            <li className="nav-item"><a href="#profile-post" className="nav-link active show" data-toggle="tab">POSTS</a></li>
                                            <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                                            <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">PHOTOS</a></li>
                                            <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">VIDEOS</a></li>
                                            <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">FRIENDS</a></li>
                                        </ul>
                                    </div>
                                    <img src="http://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg" className="img-responsive full-width" alt="cover" style={{ maxHeight: '200px' }} />
                                </div>
                                <ul className="list-unstyled no-padding hidden-sm hidden-xs cover-menu">
                                    <li className="nav-item"><a href="#profile-post" className="nav-link active show" data-toggle="tab">POSTS</a></li>
                                    <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                                    <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">PHOTOS</a></li>
                                    <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">VIDEOS</a></li>
                                    <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">FRIENDS</a></li>
                                </ul>
                            </div>{/* /.cover */}
                        </div>{/* /.profile-cover */}
                        <div className="divider" />

                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-success rounded shadow">
                                    <div className="panel-heading no-border">
                                        <div className="pull-left half">
                                            <div className="media">
                                                <div className="media-object pull-left">
                                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" alt="..." className="img-circle img-post" />
                                                </div>
                                                <div className="media-body">
                                                    <a href="" className="media-heading block mb-0 h4 text-white">John Doe</a>
                                                    <span className="text-white h6">on 8th June, 2014</span>
                                                </div>
                                            </div>
                                        </div>{/* /.pull-left */}
                                        <div className="pull-right">
                                            <a href="" className="text-white h4"><i className="fa fa-heart" /> 15.5K</a>
                                        </div>{/* /.pull-right */}
                                        <div className="clearfix" />
                                    </div>{/* /.panel-heading */}
                                    <div className="panel-body no-padding">
                                        <img src="" alt="..." className="img-responsive full-width" />
                                        <div className="inner-all block">
                                            view all <a href="">7 comments</a>
                                        </div>{/* /.inner-all */}
                                        <div className="line no-margin" />{/* /.line */}
                                        <div className="media inner-all no-margin">
                                            <div className="pull-left">
                                                <img src="http://bootdey.com/img/Content/avatar/avatar6.png" alt="..." className="img-post2" />
                                            </div>{/* /.pull-left */}
                                            <div className="media-body">
                                                <a href="" className="h4">John Doe</a>
                                                <small className="block text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </small>
                                                <em className="text-xs text-muted">Posted on <span className="text-danger">Dec 08, 2014</span></em>
                                            </div>{/* /.media-body */}
                                        </div>{/* /.media */}
                                        <div className="line no-margin" />{/* /.line */}
                                        <div className="media inner-all no-margin">
                                            <div className="pull-left">
                                                <img src="http://bootdey.com/img/Content/avatar/avatar4.png" alt="..." className="img-post2" />
                                            </div>{/* /.pull-left */}
                                            <div className="media-body">
                                                <a href="" className="h4">John Doe</a>
                                                <small className="block text-muted">Quaerat, impedit minus non commodi facere doloribus nemo ea voluptate nesciunt deleniti.</small>
                                                <em className="text-xs text-muted">Posted on <span className="text-danger">Dec 08, 2014</span></em>
                                            </div>{/* /.media-body */}
                                        </div>{/* /.media */}
                                    </div>{/* /.panel-body */}
                                    <div className="panel-footer">
                                        <form action="#" className="form-horizontal">
                                            <div className="form-group has-feedback no-margin">
                                                <input className="form-control" type="text" placeholder="Your comment here..." />
                                                <button type="submit" className="btn btn-theme fa fa-search form-control-feedback" />
                                            </div>
                                        </form>
                                    </div>{/* /.panel-footer */}
                                </div>{/* /.panel */}
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-success rounded shadow">
                                    <div className="panel-heading no-border">
                                        <div className="pull-left half">
                                            <div className="media">
                                                <div className="media-object pull-left">
                                                    <img src="http://bootdey.com/img/Content/avatar/avatar6.png" alt="..." className="img-circle img-post" />
                                                </div>
                                                <div className="media-body">
                                                    <a href="" className="media-heading block mb-0 h4 text-white">John Doe</a>
                                                    <span className="text-white h6">on 8th June, 2014</span>
                                                </div>
                                            </div>
                                        </div>{/* /.pull-left */}
                                        <div className="pull-right">
                                            <a href="" className="text-white h4"><i className="fa fa-heart" /> 15.5K</a>
                                        </div>{/* /.pull-right */}
                                        <div className="clearfix" />
                                    </div>{/* /.panel-heading */}
                                    <div className="panel-body no-padding">
                                        <div className="inner-all block">
                                            <h4>Upload on my album :D</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, iste omnis fugiat porro consequuntur ratione iure error reprehenderit cum est ab similique magnam molestias aperiam voluptatibus quia aliquid! Sed, minima.
                </p>
                                            <blockquote className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, delectus!</blockquote>

                                        </div>{/* /.inner-all */}
                                        <div className="inner-all bg-success">
                                            view all <a href="">7 comments</a>
                                        </div>
                                    </div>{/* /.panel-body */}
                                    <div className="panel-footer no-padding no-border">
                                        <div className="media inner-all no-margin">
                                            <div className="pull-left">
                                                <img src="http://bootdey.com/img/Content/avatar/avatar3.png" alt="..." className="img-post2" />
                                            </div>{/* /.pull-left */}
                                            <div className="media-body">
                                                <a href="" className="h4">John Doe</a>
                                                <small className="block text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </small>
                                                <em className="text-xs text-muted">Posted on <span className="text-danger">Dec 08, 2014</span></em>
                                            </div>{/* /.media-body */}
                                        </div>{/* /.media */}
                                        <div className="line no-margin" />{/* /.line */}
                                        <div className="media inner-all no-margin">
                                            <div className="pull-left">
                                                <img src="http://bootdey.com/img/Content/avatar/avatar5.png" alt="..." className="img-post2" />
                                            </div>{/* /.pull-left */}
                                            <div className="media-body">
                                                <a href="" className="h4">John Doe</a>
                                                <small className="block text-muted">Quaerat, impedit minus non commodi facere doloribus nemo ea voluptate nesciunt deleniti.</small>
                                                <em className="text-xs text-muted">Posted on <span className="text-danger">Dec 08, 2014</span></em>
                                            </div>{/* /.media-body */}
                                        </div>{/* /.media */}
                                        <div className="line no-margin" />{/* /.line */}
                                        <form action="#" className="form-horizontal inner-all">
                                            <div className="form-group has-feedback no-margin">
                                                <input className="form-control" type="text" placeholder="Your comment here..." />
                                                <button type="submit" className="btn btn-theme fa fa-search form-control-feedback" />
                                            </div>
                                        </form>{/* /.form-horizontal */}
                                    </div>{/* /.panel-footer */}
                                </div>{/* /.panel */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;