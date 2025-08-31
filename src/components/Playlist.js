
import React, { useState } from 'react';
import '../styles/Playlist.css';
import Track from './Track';

export default function Playlist({ playList, onAdd }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playList.name);
  const tracks = playList?.tracks || [];

  const handleNameClick = () => setIsEditing(true);
  const handleChange = (e) => setName(e.target.value);
  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };
  const handleRemoveTrack = (id) => {
    if (onAdd) {
      onAdd({
        ...playList,
        tracks: tracks.filter(track => track.id !== id)
      });
    }
  };
  return (
    <section className="playlist-section">
      {isEditing ? (
        <input
          className="playlist-name-input"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <h2 onClick={handleNameClick} style={{ cursor: 'text' }}>
          {name}
        </h2>
      )}
      <div className="playlist-tracks">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <Track key={track.id} {...track} onRemove={() => handleRemoveTrack(track.id)} />
          ))
        ) : (
          <div>No tracks in playlist</div>
        )}
      </div>
      <button>Save to Spotify</button>
    </section>
  );
}