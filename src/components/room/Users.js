import React from 'react'

const Users = ({ user }) => {
  console.log(user);

  const htmlList = user.length ? (
    user.map((user, index) => {
        return (
          <li key={index}>
          <div>
            <img src={user.image} alt=""/>
            <p>{user.name}</p>
          </div>
        </li>  
        )
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