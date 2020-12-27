import React from 'react'

const Songs = ({ songs, changePopUp }) => {

    const handleClick = () => {
        changePopUp();
    }
 
    return (
        <div className="Songs">
            <div className="flex justify-content-between valign-wrapper">
                <h5>Sange</h5>
                <button onClick={handleClick} className="btn deep-orange accent-2 white-text"><i className="fas fa-plus-square mr-2"></i>Tilføj</button>
            </div>
            <div className="scrollable">
                <ol>
                    {songs && Object.keys(songs).map((item, i) => {
                        return (
                            <li key={i}>
                                <span className="btn-small btn-floating deep-orange accent-2 mr-1 ml-1" style={{cursor: 'default'}}>{songs[item].addedBy}</span>{songs[item].title}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    ) 
}

export default Songs