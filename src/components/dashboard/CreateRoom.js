import React, { Component } from 'react'
import InviteUsers from '../utility/InviteUsers'
import { NavLink } from 'react-router-dom'
import { createProject } from '../../store/actions/roomActions'
import { connect } from 'react-redux'

class CreateRoom extends Component {
    state = {
        title: '',
        authorid: this.props.location.uid
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.createProject(this.state);
    }

    render() {
        console.log(this.props.location.uid);
        return (
            <div className="container createroom mt-5">
                <div className="row">
                    <div className="col s6 mt-5">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" onChange={this.handleChange} />
                            <label className="active" for="title">Rum navn:</label>
                        </div>
                        <InviteUsers handleSubmit={this.handleSubmit} />
                    </div>
                    <div className="col s6">
                        <NavLink to="/queue" className="btn deep-orange accent-2 mr-3 mt-3 right"><i className="fas fa-plus mr-3"></i> Opret</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateRoom)