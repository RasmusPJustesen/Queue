import React, { Component } from 'react'
import AllRooms from '../dashboard/AllRooms.js';
import MyRooms from '../dashboard/MyRooms.js';
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        const {  rooms } = this.props;
        const { auth } = this.props;
        const { profile } = this.props;

        const currentRooms = [];
        let myRooms = [];
        if(rooms){
            rooms.filter(room => {
              if(room.authorid === auth.uid) {
                return currentRooms.push(room)
              } 
            })
            
            rooms.forEach(room => {
              console.log(room);
              if(room.users.user.length > 0){
                let users = room.users.user;
                users.forEach(user => {
                  console.log(user);
                  if(user.authorid === auth.uid) {
                    myRooms.push(room)
                  }
                })
              }
            })
        }
        console.log(myRooms);

        if (!auth.uid) return <Redirect to="/login" />

        return (
            <div className="dashboard container">
                <div className="row"> 
                <div className="col s12 row">
                    <span className="ml-2 col s10">
                        Mine Queues
                        <NavLink to={{pathname: '/create', profile: profile, auth: auth}} className="btn deep-orange accent-2 mr-3 mt-3 right"><i className="fas fa-plus mr-3"></i>Nyt rum</NavLink>
                    </span>   
                </div>
                    <div className="col s12 row">
                    <AllRooms rooms={currentRooms} auth={auth} />
                </div>
                <div className="col s12 row">
                    <hr/>
                    <MyRooms rooms={myRooms} auth={auth} />
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
