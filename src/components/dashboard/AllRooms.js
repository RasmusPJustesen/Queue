import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment';

const AllRooms = ({ rooms, auth }) => {
 
  return (
      <div className="all-rooms">
          {rooms && rooms.map(room => {            
            if(auth.uid === room.authorid){
            return (
              <div className="singleroom card deep-orange accent-2 ml-4" key={room.id}>
              <NavLink to={'/queue/' + room.id} className="white-text">

                <div className="card-content row">
                <div className="top col s12">
                    <i className="fas fa-star left"></i>
                    <i className="fas fa-trash right"></i>
                </div>
                <div className="middle col s12 valign-wrapper center-align">
                    <h5>{room.title}</h5>
                    <p className="small-text"> <i className="fas fa-calendar-day mr-2"></i> {moment(room.createdAt.toDate().toString()).format('LL')} </p>
                </div>

                <div className="bottom col s12 mt-4 row">
                    <div className="infomation col s6">
                        <p className="small-text">Users</p>
                        <p className="big">

                        </p>
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
          else {
            return (
            <div></div>
            )
          }
        })
          }


</div>
  ) 
}

export default AllRooms















