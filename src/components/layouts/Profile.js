import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'

class Profile extends Component {
    render() {
        const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to="/login" />

        const fullName = profile.firstName + ' ' + profile.lastName;

        return(
            <div className="Profile container">
                <div className="row">
                    <div className="col m3 profile-left">
                        <div className="profile-image p-5">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div className="profile-settings">
                            <h4>Indstillinger</h4>
                            <ul>
                                <li>
                                    <p>Notifikationer</p>
                                    <span className="settings-notify"></span>
                                </li>
                                <li>
                                    <p>Dark mode</p>
                                    <span className="settings-darkmode"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col m9 profile-right">
                        <div className="profile-info">
                            <div className="row">
                                <div className="col m4 mt-5">
                                    <h4 className="mb-4 mt-0"><b>{fullName}</b></h4>
                                    <h5>Email</h5>
                                    <h6>{auth.email}</h6>
                                    <h5>Kodeord</h5>
                                    <h6>*********</h6>
                                </div>
                                <div className="col m8 mt-5">
                                    <div className="right d-flex flex-column">
                                        <button className="btn deep-orange accent-2 mb-2">Rediger profil</button>
                                        <button onClick={this.props.signOut} className="btn red">Logout</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="profile-apps">
                            <hr className="mb-4"/>
                            <div className="btn green"><i className="fab fa-spotify mr-2"></i>Spotify</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Profile);