import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

class ProfileInfomation extends Component {
    handleClick = () => {
        this.props.signOut;
    }

    render() {
        return(
            <div><a onClick={this.handleClick}>log out</a></div>
        )
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(ProfileInfomation);