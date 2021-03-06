import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const Header = (props) => {
    const { auth, profile } = props;
    const profilePage = auth.uid ? <Link to="/profile" className="btn btn-floating deep-orange accent-2 right mt-3 profile-sm">{profile.initials}</Link> : null;

    /* if(window.location.href.indexOf("/login") || window.location.href.indexOf("/register")) {
        return (
            <div className="Header-login blue-grey darken-1">
                <img src="/images/logo.png" className="center logo" alt="logo"/>
            </div>
        )
    } else { */
        return (
            <nav className="Header nav-wrapper blue-grey darken-2">
                <div className="container">
                    <div className="row">
                        <Link to="/" className="brand-logo center"><img src="/images/logo.png" alt="logo"/></Link>
                        {profilePage}
                    </div>
                </div>
            </nav>
        )
    /* } */

    
  
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)