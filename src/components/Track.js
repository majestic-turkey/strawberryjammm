
import React from 'react';
import '../styles/Track.css';

function Track({ name, artist, album, onRemove }) {
    return (
        <div className="track">
            <div className="track-info">
                <div className="track-title">{name}</div>
                <div className="track-details">{artist} &ndash; <span className="album">{album}</span></div>
            </div>
            {onRemove && (
                <button className="track-remove-btn" onClick={onRemove} title="Remove from playlist">×</button>
            )}
        </div>
    );
}

export default Track;