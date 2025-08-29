
import React from 'react';
import '../styles/Track.css';

function Track({ name, artist, album }) {
    return (
        <div className="track">
            <div className="track-info">
                <div className="track-title">{name}</div>
                <div className="track-details">{artist} &ndash; {album}</div>
            </div>
        </div>
    );
}

export default Track;