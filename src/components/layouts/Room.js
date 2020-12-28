import React, { Component } from 'react'
import Songs from '../../components/room/Songs'
import CurrentlyPlaying from '../room/CurrentlyPlaying'
import Users from './../room/Users'
import Queue from './../room/Queue'
import Player from './../utility/Player'
import Popup from './../utility/Popup'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Room extends Component {
    state = {
        showPopUp: false 
    }

    changePopUp = () => {
        this.setState({ showPopUp : !this.state.showPopUp})   
    }

    render() {
        const { auth } = this.props;
        const { queue } = this.props
      
        if (!auth.uid) return <Redirect to="/login" />

        const showPopUp = this.state.showPopUp;
        let popup;
        let player;

        if (showPopUp) {
            popup = <Popup changePopUp={this.changePopUp} />;
        }

        if (queue != null) {
            if(queue.authorid === auth.uid) {
                player = <Player />;
            }
        }

        if(queue) {
            return (
                <div className="Room">
                <NavLink to="/" className="white-text mt-5 room-back-arrow"><i className="fas fa-arrow-left mr-2"></i>afslut rum</NavLink>
                <div className="container">
                    <div className="row mt-3 mb-0">
                        <div className="col s12 m9">
                            <CurrentlyPlaying />
                            <Queue queue={queue.queues.song} />
                        </div>
                        <div className="col s12 m3">
                            <Songs  changePopUp={this.changePopUp} />
                            <Users auth={auth} room={queue} user={queue.users.user} />
                        </div>
                    </div>
                </div>
                {popup}
                {player}
            </div>
          )
        }
        else {
            return (
                <div className="container center"><p>Loading project...</p></div>
            )
        }  
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const queues = state.firestore.data.Queues
    const queue = queues ? queues[id] : null

    return {
        auth: state.firebase.auth,
        queue: queue
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'Queues'
        }
    ])
)(Room);