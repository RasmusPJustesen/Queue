import React, { Component } from 'react'

class SignUp extends Component {
 
  render() {
    return (
      <div className="container login">
      <form class="row">
          <div className="input-field col s12">
              <input id="email" type="text" className="validate"/>
              <label className="active" for="email">Fulde navn:</label>
          </div>

          <div className="input-field col s12">
              <input id="password" type="text" className="validate"/>
              <label className="active" for="password">Email:</label>
          </div>

          <div className="input-field col s12">
              <input id="password" type="text" className="validate"/>
              <label className="active" for="password">Kodeord:</label>
          </div>

          <div className="input-field col s12">
              <input id="password" type="text" className="validate"/>
              <label className="active" for="password">Kodeord igen:</label>
          </div>
          

          <p className="center-align">
              <a href="/" className="waves-effect waves-light btn-large deep-orange accent-2"> Opret </a>
          </p>
      </form>
  </div>

    )
  }
}

export default SignUp