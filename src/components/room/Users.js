import React from 'react'

const Users = () => {
  return (
    <div className="Users">
      <div className="flex justify-content-between valign-wrapper">
        <h5>Brugere</h5>
        <button className="btn deep-orange accent-2 white-text"><i class="fas fa-plus-square mr-2"></i>Tilføj</button>
      </div>
      <div>
        <ol>
          <li>
            <div>
              <img src="/images/rasmus.jpg" alt=""/>
              <p>Rasmus</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/nicklas.jpg" alt=""/>
              <p>Nicklas</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  ) 
}

export default Users