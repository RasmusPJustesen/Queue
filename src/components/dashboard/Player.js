import React from 'react'

const Player = () => {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-image">
        <img src="images/volbeat.jpg" alt=""/>
        <span className="card-title">
          <i class="fas fa-play-circle play-pause-btn"></i>
        </span>
      </div>
      <div className="card-content white-text">
        <h4>Now playing:<br />Gates of Babylon</h4> 
        <p>By Volbeat</p>
      </div>
      <div className="card-action"> 
        <a href="#">Play/pause</a>
        <a href="#">Skip</a>
      </div>
    </div>
  ) 
}

export default Player