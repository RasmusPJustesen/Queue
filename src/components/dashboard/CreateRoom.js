import React from 'react'
import InviteUsers from '../utility/InviteUsers';

const CreateRoom = () => {
  return (
    <div className="container createroom mt-5">
      <div className="row">
        <div className="col s6 mt-5">
          <div className="input-field col s12">
            <input id="room" type="text" className="validate"/>
            <label className="active" for="room">Rum navn:</label>
           </div>
           <InviteUsers />
        </div>
        <div className="col s6">
         <button className="btn deep-orange accent-2 mt-3 right"> <i class="fas fa-plus mr-3"></i> Opret</button>
        </div>
      </div>
    </div>
  ) 
}



export default CreateRoom