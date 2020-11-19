import React, { Component } from 'react'
import CreateRoom from '../dashboard/CreateRoom.js'
import AllRooms from '../dashboard/AllRooms.js'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col m4">
            <CreateRoom /> 
          </div>
          <div className="col m4 offset-m2"> 
            <AllRooms />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
