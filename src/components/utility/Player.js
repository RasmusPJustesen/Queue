import React, { Component } from 'react'

class Player extends Component {
    render() {
        return (
            <div className="Player pt-4 pb-4 blue-grey darken-2">
                <div className="container">
                    <div className="row valign-wrapper mb-0">
                        <div className="col s3 flex valign-wrapper player-img-txt">
                            <img src="/images/volbeat.jpg" className="mr-3" alt=""/>
                            <div className="center-align">
                                <h6 className="m-0"><b>Gates of Babylon</b></h6>
                                <p className="m-0">Volbeat</p>
                            </div>
                        </div>
                        <div className="col s12 m6 sm-hide">
                            <div className="flex valign-wrapper">
                                <span className="mr-2">3:45</span>
                                <div className="player-bar grey">
                                    <span className="player-bar-fill"></span>
                                    <span className="player-bar-dot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col offset-sm2 s7 m3 player-btns">
                            <div className="row mb-0 deep-orange-text text-accent-2">
                                <div className="col s4">
                                    <i className="fas fa-backward"></i>
                                </div>
                                <div className="col s4">
                                    <i className="fas fa-play"></i>
                                </div>
                                <div className="col s4">
                                    <i className="fas fa-forward"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;