import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const Header = (props) => {
  const { auth } = props;
  console.log(auth);

  const loggedIn = auth.uid ? <button onClick={props.signOut}>Logout</button> : null;

  return (
    <nav className="Header nav-wrapper blue-grey darken-2">
      <div className="container">
        <Link to="/" className="brand-logo center">Queue</Link>
          {loggedIn}
      </div>
    </nav>
  ) 
  
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)