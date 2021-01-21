import React from 'react'

const CurrentlyPlaying = (props) => {

    return (
        <div className="CurrentlyPlaying">
        <img src={props.videoID.image} className="current-song-img" alt=""/>
            <div className="row center-align">
               
                <iframe         id="video"
                                
                                style={{
                                position: "absolute",
                                display: 'none',
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "20vh"
                                }}
                                className="current-song-img"
                                title="test"
                                allow='autoplay'
                                src={`https://www.youtube.com/embed/${props.videoID.id}?autoplay=1&enablejsapi=1`}
                                frameBorder="0"
                                
                            />
               
            </div>
            <div className="row center-align mb-0">
                <h6 className="m-0">Afspiller lige nu:</h6>
                <h5 className="m-0">{props.videoID.title}</h5>
            </div>
        </div>
    ) 
}

export default CurrentlyPlaying