import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class SignIn extends Component {

    render() {
        return (
    <div className="container login">
        <form class="row">
            <div className="input-field col s12">
                <input id="email" type="text" className="validate"/>
                <label className="active" for="email">Email:</label>
            </div>

            <div className="input-field col s12">
                <input id="password" type="text" className="validate"/>
                <label className="active" for="password">Kodeord:</label>
            </div>
            
            <p className="col s12">
                <label>
                    <input type="checkbox" />
                    <span className="white-text">Husk mig</span>
                </label>
            </p>

            <p className="center-align">
                <a className="waves-effect waves-light btn-large deep-orange accent-2">Login</a>
            </p>

            <p className="center-align">
                <NavLink to="/register">Opret</NavLink>
            </p>

            <p className="center-align some mt-5">Eller login med</p>
            <div className="image col s2 offset-s4">
             <img style={{width: "85%"}} className="responsive-img" src="icons/facebook_icon.png" alt=""/>
            </div>
            <div className="image col s2">
             <img className="responsive-img" src="icons/google_icon.png" alt=""/>
            </div>
        </form>
    </div>

        )
    }
}

export default SignIn;