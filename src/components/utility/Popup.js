import React from 'react';
import SearchSongs from './SearchSongs';

const Popup = (props) => {
 
    return (
        <div className={ props.showPopUp ? 'Popup' : 'hide' }>
            <div className="popup-box blue-grey darken-2 p-5">
                <div className="popup-close"><i className="fas fa-times"></i></div>
                <SearchSongs />
            </div>
        </div>
    )
}

export default Popup;