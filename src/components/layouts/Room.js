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
        this.setState({ showPopUp : !this.state.showPopUp})   
    }

    render() {
        const showPopUp = this.state.showPopUp;
        let popup;
        if (showPopUp) {
          popup = <Popup changePopUp={this.changePopUp} />;
        }

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
                {popup}
                <Player />
            </div>
        )
    }
}

export default Room;