import React, { Component } from 'react';
import Songs from './../room/Songs';
import CurrentlyPlaying from '../room/CurrentlyPlaying';
import Users from './../room/Users';
import Queue from './../room/Queue';
import Player from './../utility/Player';
import Popup from './../utility/Popup';

class Room extends Component {
    render() {
        return (
            <div className="Room">
                <a href="/" className="white-text mt-5 room-back-arrow"><i class="fas fa-arrow-left mr-2"></i>afslut rum</a>
                <div className="container">
                    <div className="row mt-3 mb-0">
                        <div className="col s12 m9">
                            <CurrentlyPlaying />
                            <Queue   />
                        </div>
                        <div className="col s12 m3">
                            <Songs />
                            <Users />
                        </div>
                    </div>
                </div>
                <Popup />
                <Player />
            </div>
        )
    }
}

export default Room;