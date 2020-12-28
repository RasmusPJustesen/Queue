import React, { Component } from 'react'
import MyRooms from '../dashboard/MyRooms.js'
import OtherRooms from '../dashboard/OtherRooms.js'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        const { rooms } = this.props;
        const { auth } = this.props;
        const { profile } = this.props;

        const currentRooms = [];
        let myRooms = [];
        if(rooms){
            rooms.filter(room => {
              if(room.authorid === auth.uid) {
                return currentRooms.push(room)
              } 
        else {
          return null
        }
            })
            
            rooms.forEach(room => {
              if(room.users.user.length > 0){
                let users = room.users.user;
                users.forEach(user => {
                  if(user.id === auth.uid) {
                    myRooms.push(room)
                  }
                })
              }
            })
        }
    
        if (!auth.uid) return <Redirect to="/login" />

        return (
            <div className="dashboard container">
                <div className="row"> 
                  
                  <NavLink to={{pathname: '/create', profile: profile, auth: auth}} className="btn deep-orange accent-2 mr-3 mt-3 right"><i className="fas fa-plus mr-3"></i>Nyt rum</NavLink> 
                  
                  <div className="col s12">
                    <h3>Mine rum</h3>
                    <MyRooms rooms={currentRooms} auth={auth} />
                  </div>

                  <hr className="col s12 mt-5 mb-5" />

                  <div className="col s12">
                      <h3 className="mt-0">Andres rum</h3>
                      <OtherRooms rooms={myRooms} auth={auth} />
                  </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

  
  const queue = state.firestore.ordered.Queues
    return {
        auth: state.firebase.auth,
        rooms: queue,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'Queues'
        }
    ])
)(Dashboard)
