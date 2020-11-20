import React, { Component } from 'react'
import FavoriteRooms from '../dashboard/FavoriteRooms.js'
import AllRooms from '../dashboard/AllRooms.js'

class Dashboard extends Component {
  render() {
    return (
      <div className=" dashboard container">
        <div className="row"> 
      
        <div className="col s12 row">
        <span className="ml-2 col s10">
         Favorit Rum
         <button className="btn deep-orange mr-3 mt-3 right"> <i class="fas fa-plus mr-3"></i> Nyt rum</button>
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

export default Dashboard
