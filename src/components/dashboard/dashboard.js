import React, { Component } from 'react'
import Player from './Player.js'

class Dashboard extends Component {
  render() {

    //test for dynamic page (delete if needed)
    let isGrouped = true;
    const player = isGrouped ? <Player /> : <h1>No group</h1>


    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col m8">
            {player}
          </div>
          <div className="col m4">
            <h1>Options</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard