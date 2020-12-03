import React from 'react'
import { NavLink } from 'react-router-dom'

const AllRooms = () => {
  return (
    <div className="singleroom card col s3 deep-orange accent-2 ml-4">
      <NavLink to="/queue" className="white-text">
  
  <div className="card-content row">
      <div className="top col s12">
           <i className="fas fa-star left"></i>
           <i className="fas fa-trash right"></i>
      </div>
      <div className="middle col s12 valign-wrapper center-align">
          <h5>Queify Playliste</h5>
          <p className="small-text"> <i className="fas fa-calendar-day mr-2"></i>  20. November</p>
      </div>
      
      <div className="bottom col s12 mt-4 row">
          <div className="infomation col s6">
              <p className="small-text">Users</p>
              <p className="big">12</p>
          </div>
          <div className="infomation col s6">
              <p className="small-text">Songs</p>
              <p className="big">58</p>
          </div>
      </div>
  </div>
  </NavLink>
</div>
  ) 
}

export default AllRooms