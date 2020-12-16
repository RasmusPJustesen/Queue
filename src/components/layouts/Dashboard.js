import React, { Component } from 'react'
import FavoriteRooms from '../dashboard/FavoriteRooms.js'
import AllRooms from '../dashboard/AllRooms.js'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {



  render() {
    
    const {  rooms } = this.props;
    const { auth } = this.props;
    
    
    if(rooms){
     var users = [];
      rooms.forEach(user => {
        //console.log(user.users);
        users.push(user.users);
      })

    }

   
    if (!auth.uid) return <Redirect to="/login" />

    return (
      <div className="dashboard container">
        <div className="row"> 
      
        <div className="col s12 row">
        <span className="ml-2 col s10">
         Mine Queues
         <NavLink to={{
           pathname: '/create',
          
             uid: auth.uid
           
         }} className="btn deep-orange accent-2 mr-3 mt-3 right"><i className="fas fa-plus mr-3"></i> Nyt rum</NavLink>
        </span>   
        
        </div>
          <div className="col s12 row">
          <AllRooms rooms={rooms} auth={auth} users={users} />
          </div>
          
          <div className="col s12 row">
          <hr/>
           
           
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
        rooms: queue
        
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
