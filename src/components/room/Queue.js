import React from 'react';

const Queue = ({queue, handleChange}) => {
  
    const handleClick = (id) => {
        handleChange(id)
    }

    const htmlList = queue ? (
        Object.keys(queue).map((item, i, arr) => {
            
            if(i <= 4) {
                return (
                    <div className="card blue-grey darken-1" key={item} onClick={() => handleClick(queue[item])}>
                        <div className="card-content">
                        <img src={queue[item].image} alt=""/>
                        </div>  
                        <div className="card-action">

                        <p className="queue-song-title"><b>{queue[item].title}</b></p>
                    <p className="queue-song-author">{queue[item].author}</p>

                        </div>
                    </div>
                )
            } else {
                return null;
            }
            
        })
    ) : (
        <div className="center">no posts yet</div>
    );

    return (
        <div className="Queue">
        <h5 className="mt-0">Næste i køen</h5>
            <div className="grid">
                {htmlList}
            </div>
        </div>  
    )
}

export default Queue