import React from 'react'

const CurrentlyPlaying = () => {

    return (
        <div className="CurrentlyPlaying">
            <div className="row center-align">
                <img src="/images/volbeat.jpg" className="prev-song-img" alt=""/>
                <img src="/images/volbeat.jpg" className="current-song-img" alt=""/>
                <img src="/images/takingover.jpg" className="next-song-img" alt=""/>
            </div>
            <div className="row center-align mb-0">
                <h6 className="m-0">Afspiller lige nu:</h6>
                <h5 className="m-0">Gates of Babylon</h5>
            </div>
        </div>
    ) 
}

export default CurrentlyPlaying