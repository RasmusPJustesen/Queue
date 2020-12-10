import React, { Component } from 'react'
import FavoriteRooms from '../dashboard/FavoriteRooms.js'
import AllRooms from '../dashboard/AllRooms.js'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />

    return (
      <div className="dashboard container">
        <div className="row"> 
      
        <div className="col s12 row">
        <span className="ml-2 col s10">
         Favorit Rum
         <NavLink to="/create" className="btn deep-orange accent-2 mr-3 mt-3 right"><i className="fas fa-plus mr-3"></i> Nyt rum</NavLink>
        </span>   
        
        </div>
          <div className="col s12 row">
            <FavoriteRooms />
            <FavoriteRooms />
            <FavoriteRooms />
          </div>
          
          <div className="col s12 row">
          <hr/>
            <h3 className="ml-4">Alle Rum</h3>   
            <AllRooms />
            <AllRooms />
            <AllRooms />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard)
