import React, { Component } from 'react'
import Player from './Player.js'
import Options from './Options.js'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col m4">
            <Player /> 
          </div>
          <div className="col m4 offset-m2"> 
            <Options />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
