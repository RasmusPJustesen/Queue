import React from 'react';
import SearchSongs from './SearchSongs';

const Popup = (props) => {

    const handleClick = () => {
        props.changePopUp();
    }

    return (
        <div className="Popup">
            <div className="popup-box blue-grey darken-2 p-5">
                <div onClick={handleClick} className="popup-close"><i className="fas fa-times"></i></div>
                <SearchSongs roomId={props.roomId} songs={props.queue.songs} profile={props.profile} />
            </div>
        </div>
    )
}

export default Popup;