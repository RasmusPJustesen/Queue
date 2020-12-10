import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getFirestore } from 'redux-firestore';
import { signOut } from '../../store/actions/authActions'

class Profile extends Component {
    render() {
        const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to="/login" />

        const fullName = profile.firstName + ' ' + profile.lastName;

        const edit = () => {
            let toggle = document.getElementById("input-fullName");

            if (toggle.classList.contains("input-fullName")) {
                document.getElementById("input-fullName").removeAttribute("disabled");
                document.getElementById("input-fullName").classList.remove('input-fullName');
                
                document.getElementById("edit-btn").style.display = "none";
                document.getElementById("save-btn").style.display = "block";
            } else {
                document.getElementById("input-fullName").setAttribute("disabled", "disabled");
                document.getElementById("input-fullName").classList.add('input-fullName');

                document.getElementById("edit-btn").style.display = "block";
                document.getElementById("save-btn").style.display = "none";
                
                getFirestore().collection('Users').doc(auth.uid).set({
                    //set firstname to value of 'input-fullName' if value is not null else set it to placeholder of 'input-fullName'
                    firstName: document.getElementById('input-fullName').value ? (document.getElementById('input-fullName').value).split(" ")[0] : (document.getElementById('input-fullName').getAttribute("placeholder")).split(" ")[0],
                    //set lastname to value of 'input-fullName' if value is not null else set it to placeholder of 'input-fullName'
                    lastName: document.getElementById('input-fullName').value ? (document.getElementById('input-fullName').value).split(" ")[1] : (document.getElementById('input-fullName').getAttribute("placeholder")).split(" ")[1],
                    //set initials to first letter of the first word in 'input-fullName' and the first letter of the second word in 'input-fullName'
                    initials: document.getElementById('input-fullName').value ? (document.getElementById('input-fullName').value).split(" ")[0][0] + (document.getElementById('input-fullName').value).split(" ")[1][0] : (document.getElementById('input-fullName').getAttribute("placeholder")).split(" ")[0][0] + (document.getElementById('input-fullName').getAttribute("placeholder")).split(" ")[1][0]
                })
            }
        }

        return(
            <div className="Profile container">
                <div className="row">
                    <div className="col m3 profile-left">
                        <div className="profile-image p-5">
                            <i className="fas fa-user-circle"></i>
                        </div>
                        <div className="profile-settings">
                            <h4>Indstillinger</h4>
                            <ul>
                                <li>
                                    <p>Notifikationer</p>
                                    <span className="settings-notify"></span>
                                </li>
                                <li>
                                    <p>Dark mode</p>
                                    <span className="settings-darkmode"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col m9 profile-right">
                        <div className="profile-info">
                            <div className="row">
                                <div className="col m8 mt-5">
                                    <input type="text" name="fullName" className="browser-default input-fullName" id="input-fullName" placeholder={fullName} disabled />
                                    <h5 className="mb-0">Email</h5>
                                    <input type="email" name="email" className="input-email mt-0" placeholder={auth.email} title="Det er ikke muligt at ændre email på nuværende tidspunkt" disabled />
                                    <h5 className="mb-0">Kodeord</h5>
                                    <input type="password" name="password" className="input-password mt-0" placeholder="********" title="Kontakt os for at ændre kodeord" disabled />
                                </div>
                                <div className="col m4 mt-5">
                                    <div className="right d-flex flex-column">
                                        <button onClick={edit} id="edit-btn" className="btn deep-orange accent-2 mb-2">Rediger profil</button>
                                        <button onClick={edit} id="save-btn" className="btn deep-orange accent-2 mb-2">Gem</button>
                                        <button onClick={this.props.signOut} className="btn red">Logout</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="profile-apps">
                            <hr className="mb-4"/>
                            <div className="btn green"><i className="fab fa-spotify mr-2"></i>Spotify</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Profile);