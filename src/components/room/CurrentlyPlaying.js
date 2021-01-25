import React from 'react'
import YouTube from 'react-youtube';
const CurrentlyPlaying = (props) => {

    const opts = {
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
     

    return (
        <div className="CurrentlyPlaying">
        <img src={props.videoID.image} className="current-song-img" alt=""/>
            <div className="row center-align">
            <YouTube videoId={props.videoID.id} opts={opts}  className="iframe" />    
            </div>
            <div className="row center-align mb-0">
                <h6 className="m-0">Afspiller lige nu:</h6>
                <h5 className="m-0">{props.videoID.title}</h5>
               
            </div>
        </div>
    ) 
}

export default CurrentlyPlaying