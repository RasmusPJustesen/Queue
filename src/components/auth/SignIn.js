import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to="/" />

        const { authError } = this.props;
        
        return (
            <div className="container login">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="email" type="email" className="validate" onChange={this.handleChange} />
                        <label htmlFor="email">Email:</label>
                    </div>

                    <div className="input-field">
                        <input id="password" type="password" className="validate" onChange={this.handleChange} />
                        <label htmlFor="password">Kodeord:</label>
                    </div>
                    <div className="white-text center">
                        { authError ? <p>{authError}</p> : null }
                    </div>
                    <div className="">
                        <label>
                            <input type="checkbox" />
                            <span className="white-text">Husk mig</span>
                        </label>
                    </div>

                    <p className="center-align">
                        <button className="btn deep-orange accent-2">Login</button>
                    </p>

                    <p className="center-align">
                        <NavLink to="/register">Opret</NavLink>
                    </p>

                    <p className="center-align some mt-5">Eller login med</p>
                    <div className="row">
                        <div className="image col s3 offset-s3">
                            <img className="responsive-img" src="icons/facebook_icon.png" alt=""/>
                        </div>
                        <div className="image col s3">
                            <img className="responsive-img" src="icons/google_icon.png" alt=""/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);