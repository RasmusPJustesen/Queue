import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
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
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />

        return (
            <div className="container login">
                <form className="row" onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <input id="firstName" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="firstName">Navn:</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="lastName" type="text" className="validate" onChange={this.handleChange} />
                        <label htmlFor="lastName">Efternavn:</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={this.handleChange} />
                        <label htmlFor="email">Email:</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" onChange={this.handleChange} />
                        <label htmlFor="password">Kodeord:</label>
                    </div>

                    {/* <div className="input-field col s12">
                        <input id="password2" type="password" className="validate"/>
                        <label for="password2">Kodeord igen:</label>
                    </div> */}

                    <p className="center-align">
                        <button className="btn waves-effect waves-light deep-orange accent-2">Opret</button>
                    </p>
                    <div className="center white-text">
                        { authError ? <p>{authError}</p> : null }
                    </div>
                </form>
                <p className="center-align">
                    <NavLink to="/login">Tilbage til login</NavLink>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)