import React from 'react';

const Queue = ({queue}) => {
  
    //console.log(queue);
    let count = 0;

    const htmlList = queue.length ? (
        queue.map((song, index) => {
            if(count < 5) {
                count++;
                return (
                    <div className="col m2 card blue-grey darken-1" key={index}>
                        <div className="card-content">
                            <img src={song.image} alt=""/>
                        </div>
                        <div className="card-action">
                            <p className="queue-song-title"><b>{song.title}</b></p>
                            <p className="queue-song-author">{song.author}</p>
                        </div>
                    </div>
                )
            } else {
                return null
            }
            
        })
    ) : (
        <div className="center">no posts yet</div>
    ); 

    return (
        <div className="Queue">
        <h5 className="mt-0">Næste i køen</h5>
            <div className="row">
                {htmlList}
            </div>
        </div>  
    )
}

export default Queue