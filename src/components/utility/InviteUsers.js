import React from 'react'

const InviteUsers = (props) => {

    const { filteredUsers } = props;
  

    const htmlList = filteredUsers.length ? (
        filteredUsers.map((user, index) => {
            return (
                <div className="col m3 card blue-grey darken-1" key={user.id} onClick={() => handleClick(user)}>
                <div className="card-content">
                  
                </div>
                <div className="card-action">
                    <p className="user-song-author">{user.firstName} {user.lastName}</p>
                </div>
            </div>
            )
        })
        ) : (
            <div className="center">no posts yet...</div>
        );
       

    console.log(props);
    const handleClick = (user) => {
        console.log(user);
        props.inviteUser(user);
    }

    const handleChange = (e) => {
        props.filterChange(e.target.value);
        
    }

    const searchButton = () => {
       props.search(); 
    }

    
    
 
    return (
        <div className="user input-field col s12">
            <input id="email" type="text" className="validate" onChange={handleChange}/>
            <label for="email">Email:</label>
            <button onClick={searchButton} className="btn deep-orange accent-2">Søg</button>
            <div className="row mt-3">
              
            {htmlList}

           </div>
        </div>
    ) 

}

export default InviteUsers;