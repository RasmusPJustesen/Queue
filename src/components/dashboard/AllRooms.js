import React from 'react'

const AllRooms = () => {
  return (
    <div className="card deep-orange accent-2">
      <div className="card-content white-text">
        <span className="card-title">Options</span>
        <p>List of options</p>
        <ul>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
            <li>Option</li>
        </ul>
      </div>
      <div className="card-action">
        <button className="btn deep-orange accent-4">Action1</button>
        <button className="btn deep-orange accent-4 ml-1">Action2</button> 
      </div>
    </div>
  ) 
}

export default AllRooms