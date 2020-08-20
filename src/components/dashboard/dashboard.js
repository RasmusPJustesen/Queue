  
import React, { Component } from 'react'
import User from './user/user.js'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
          <User />
      </div>
    )
  }
}

export default Dashboard