import React from 'react';
import SearchSongs from './SearchSongs';

const Popup = () => {
    return (
        <div className="Popup hide">
            <div className="popup-box blue-grey darken-2 p-5">
                <div className="popup-close"><i class="fas fa-times"></i></div>
                <SearchSongs />
            </div>
        </div>
    )
}

export default Popup;