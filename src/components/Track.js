
import React from 'react';
import '../styles/Track.css';

function Track({ title, artist, album, duration }) {
    return (
        <div className="track">
            <div className="track-info">
                <div className="track-title">{title}</div>
                <div className="track-details">{artist} &ndash; {album}</div>
            </div>
            <div className="track-duration">
                {duration}
            </div>
        </div>
    );
}

export default Track;