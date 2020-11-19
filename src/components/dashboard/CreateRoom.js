import React from 'react'

const CreateRoom = () => {
  return (
    <div className="card deep-orange accent-2"> 
      <div className="card-image">
        <img src="images/volbeat.jpg" alt=""/>
        <span className="card-title">
          <i class="fas fa-play-circle play-pause-btn"></i>
        </span>
      </div>
      <div className="card-content white-text">
        <h4>Now playing:<br />Gates of Babylon</h4> 
        <p>By Volbeat</p>
        <ol className="playlist-list">
          <li><span className="btn btn-floating pink lighten-1">RP</span> Release me</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Call me maybe</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Du hast</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Let me go</li>
          <li className="bold"><span className="btn btn-floating pink lighten-1">RP</span> Gates of Babylon</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Beast inside</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Baby</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Work</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Nede Mette</li>
          <li><span className="btn btn-floating pink lighten-1">RP</span> Beat it</li>
        </ol>
      </div>
      <div className="card-action"> 
        <button className="btn deep-orange accent-3">Play/pause</button>
        <button className="btn deep-orange accent-3 ml-2">Skip</button>
      </div>
    </div>
  ) 
}

export default CreateRoom