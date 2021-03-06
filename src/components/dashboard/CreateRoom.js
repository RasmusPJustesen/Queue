import React, { Component } from 'react'
import InviteUsers from '../utility/InviteUsers'
import { createProject } from '../../store/actions/roomActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class CreateRoom extends Component {

    state = {
        filter: '',
        filteredUsers: {} ,
        Queues: {
            title: '',
            authorid: this.props.location.auth.uid,
            authorName: this.props.location.profile.firstName + ' ' + this.props.location.profile.lastName,
            users: {
                user: [{
                    firstName: this.props.location.profile.firstName,
                    lastName: this.props.location.profile.lastName,
                    initials: this.props.location.profile.initials,
                    id: this.props.location.auth.uid
                }]
            }
        }
    }
    

    handleChange = (e) => {
        this.setState({
            ...this.state, // merge with the original `state.items`
            Queues: {
              ...this.state.Queues,
              title: e.target.value
            }      
        });
    }

    filterChange = (text) => {
        this.setState({
            filter: text,
            Queues: {
              ...this.state.Queues
            }      
        });
    }

    handleSubmit = (e) => {
        this.props.createProject(this.state.Queues);
        this.props.history.push("/");
    }

    inviteUser = (user) => {

        if(!this.state.Queues.users.user.includes(user)) {
            this.setState({
                ...this.state,
                Queues:{
                    ...this.state.Queues,
                    users: {
                        user: [
                            ...this.state.Queues.users.user, 
                            user
                        ]
                    }
                }
            })
        }
    }
    
    search = () => {
        const { users} = this.props;
        let currentUsers = users.filter(user => {
            if (user.id !== this.props.location.auth.uid) {
                return user.firstName.indexOf(this.state.filter) !== -1;
            } else {
                return null
            }
        });
        this.setState({
            ...this.state,
            filteredUsers: currentUsers
        })
    }


    render() {  
        const { users } = this.props; 
        return (
            <div className="container createroom mt-5">
                <div className="row">
                    <div className="col s12 m6 mt-5">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" onChange={this.handleChange} />
                            <label for="title">Indtast rum navn her:</label>
                        </div>
                    </div>
                    <div className="col s12">
                    <InviteUsers search={this.search} filteredUsers={this.state.filteredUsers} filter={this.state.filter} filterChange={this.filterChange} users={users} inviteUser={this.inviteUser}  />
                    </div>
                    <button onClick={this.handleSubmit} className="btn deep-orange accent-2 mr-3 mt-3 right"><i className="fas fa-plus mr-3"></i>Opret</button>
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

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.firestore.ordered.Users,
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'Users'
        }
    ])
)(CreateRoom);