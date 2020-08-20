import React, { Component } from 'react'
import User from '../user/User.js'

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