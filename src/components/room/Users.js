import React from 'react'

const Users = ({ user, auth, room }) => {

    console.log(room)

    const htmlList = user.length ? (
    user.map((user, index) => {

        if(user.id === auth.uid && user.id === room.authorid) {
            return (
                <li key={index}>
                    <div>
                        <p><b>{user.firstName} <span style={{fontSize: '12px'}}>(admin)</span></b></p>
                    </div>
                </li>  
            )
        } else if (user.id === auth.uid) {
            return (
                <li key={index}>
                    <div>
                        <p><b>{user.firstName}</b></p>
                    </div>
                </li>  
            )
        } else if (user.id === room.authorid) {
            return (
                <li key={index}>
                    <div>
                        <p>{user.firstName} <span style={{fontSize: '12px'}}>(admin)</span></p>
                    </div>
                </li>  
            )
        } else {
            return (
                <li key={index}>
                    <div>
                        <p>{user.firstName}</p>
                    </div>
                </li>  
            )
        }   
    })
    ) : (
        <div className="center">no posts yet</div>
    );
    return (
        <div className="Users">
            <div className="flex justify-content-between valign-wrapper">
                <h5>Brugere</h5>
                <button className="btn deep-orange accent-2 white-text"><i className="fas fa-plus-square mr-2"></i>Tilføj</button>
            </div>
            <div>
                <ol>
                    {htmlList}
                </ol>
            </div>
        </div>
    ) 
}

export default Users