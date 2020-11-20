import React, { Component } from 'react'

class SearchSongs extends Component {
    render() {
      return (
        <div className="SearchSongs">
          <div>
            <input type="text" className="mr-3 white-text" placeholder="Skriv sang titel her" />
            <button className="btn"><i class="fas fa-search"></i> Søg</button>
          </div>
          <div className="song-results mt-1">
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/awaken.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Awaken</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/baddest.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Baddest</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/get_jinxed.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Get Jinxed</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/giants.png" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Giants</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/legends_never_die.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title truncate"><b>Legends Never Die</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/phoenix.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Phoenix</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/pop_stars.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Pop stars</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/rise.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Rise</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/warriors.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Warriors</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <img src="/images/worlds_collide.jpg" alt=""/>
              </div>
              <div className="card-action">
                <p className="queue-song-title"><b>Worlds colide</b></p>
                <p className="queue-song-author">LoL</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default SearchSongs;