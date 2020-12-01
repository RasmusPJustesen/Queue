import React, { Component } from 'react';
import Songs from '../../components/room/Songs'; 
import CurrentlyPlaying from '../room/CurrentlyPlaying';
import Users from './../room/Users';
import Queue from './../room/Queue';
import Player from './../utility/Player';
import Popup from './../utility/Popup';
import { NavLink } from 'react-router-dom'


class Room extends Component {
    state = {
        showPopUp: false
        
    }
    changePopUp = () => {
      
        console.log("before: " + this.state.showPopUp);
        this.state.showPopUp = !this.state.showPopUp;
        console.log("after: " + this.state.showPopUp);
    }

    render() {
       

        console.log(this.state.showPopUp);
        return (
            <div className="Room">
              <NavLink to="/dashboard" className="white-text mt-5 room-back-arrow"><i className="fas fa-arrow-left mr-2"></i>afslut rum</NavLink>
                <div className="container">
                    <div className="row mt-3 mb-0">
                        <div className="col s12 m9">
                            <CurrentlyPlaying />
                            <Queue   />
                        </div>
                        <div className="col s12 m3">
                            <Songs  changePopUp={this.changePopUp} />
                            <Users />
                        </div>
                    </div>
                </div>
                <Popup showPopUp={this.state.showPopUp} />
                <Player />
            </div>
        )
    }
}

export default Room;