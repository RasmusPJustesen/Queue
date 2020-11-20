import React from 'react';

const Queue = () => {
  return (
    <div className="Queue">
      <h5 className="mt-0">Næste i køen</h5>
      <div className="row">
        <div className="col m2 card blue-grey darken-1">
          <div className="card-content">
            <img src="/images/takingover.jpg" alt=""/>
          </div>
          <div className="card-action">
            <p className="queue-song-title"><b>Take Over</b></p>
            <p className="queue-song-author">LoL</p>
          </div>
        </div>
        <div className="col m2 card blue-grey darken-1">
          <div className="card-content">
            <img src="/images/Strip_No_More.jpg" alt=""/>
          </div>
          <div className="card-action">
            <p className="queue-song-title"><b>Strip No More</b></p>
            <p className="queue-song-author">Lukas Gråskinke</p>
          </div>
        </div>
        <div className="col m2 card blue-grey darken-1">
          <div className="card-content">
            <img src="/images/volbeat.jpg" alt=""/>
          </div>
          <div className="card-action">
            <p className="queue-song-title"><b>Lomesome Rider</b></p>
            <p className="queue-song-author">Volbeat</p>
          </div>
        </div>
        <div className="col m2 card blue-grey darken-1">
          <div className="card-content">
            <img src="/images/volbeat.jpg" alt=""/>
          </div>
          <div className="card-action">
            <p className="queue-song-title"><b>For Evigt</b></p>
            <p className="queue-song-author">Volbeat</p>
          </div>
        </div>
        <div className="col m2 card blue-grey darken-1">
          <div className="card-content">
            <img src="/images/immortals.jpg" alt=""/>
          </div>
          <div className="card-action">
            <p className="queue-song-title"><b>Immortals</b></p>
            <p className="queue-song-author">Fall out Boys</p>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Queue