import React, { Component } from 'react'

class InviteUsers extends Component {
    render() {
      return (
        
        <div className="user input-field col s12">
        <input id="email" type="text" className="validate"/>
        <label className="active" for="email">Email:</label>
        <button className="btn deep-orange">Invite</button>
          <div className="row mt-3">
          <div className="col m3 card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/nicklas.jpg" className="responsive-img" alt=""/>
              </div>
              <div className="card-action">
                <p className="user-song-author">Nicklas Degnebolig</p>
              </div>
            </div>

            <div className="col m3 card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/rasmus.jpg" className="responsive-img" alt=""/>
              </div>
              <div className="card-action">
                <p className="user-song-author">Rasmus Justessen</p>
              </div>
            </div>
          </div>
       </div>
        
      )
    }
}

export default InviteUsers;