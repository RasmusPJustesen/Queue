import React from 'react'

const InviteUsers = (props) => {

    const { filteredUsers } = props;
  

    const htmlList = filteredUsers.length ? (
        filteredUsers.map((user, index) => {
            return (
                <div className="card blue-grey darken-1" key={user.id} style={{cursor: 'pointer'}} onClick={() => handleClick(user)}>
                    <div className="card-content pt-4 pb-4 pl-2 pr-2">
                        <p className="user-song-author center">{user.firstName}<br />{user.lastName}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="left">Ingen personer blev fundet.</p>
    );

    const handleClick = (user) => {
        props.inviteUser(user);
    }

    const handleChange = (e) => {
        props.filterChange(e.target.value);
        
    }

    const searchButton = () => {
       props.search(); 
    }

    return (
        <div>
            <hr className="col s12" />
            <h5 className="col s12">Inviter personer til rummet</h5>
            <div className="user input-field col s6">
                <input id="email" type="text" className="validate" onChange={handleChange}/>
                <label for="email">Indtast deres fornavn her:</label>
                <button onClick={searchButton} className="btn deep-orange accent-2">Søg</button>
            </div>
            <div className="all-users col s12 mt-3">
                {htmlList}
            </div>
        </div>
    ) 

}

export default InviteUsers;