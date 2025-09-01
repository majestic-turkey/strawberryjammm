
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
  const handleRemoveTrack = (uri) => {
    if (onAdd) {
      onAdd({
        ...playList,
        tracks: tracks.filter(track => track.uri !== uri)
      });
    }
  };
    const handleSaveToSpotify = () => {
      const playlistArray = [name, ...tracks.map(track => track.uri)];
      console.log('Playlist array for Spotify:', playlistArray);
      // TODO: Replace with actual API call
      if (onAdd) {
        onAdd({
          ...playList,
          name: 'New Playlist',
          tracks: []
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
            <Track key={track.uri} {...track} onRemove={() => handleRemoveTrack(track.uri)} />
          ))
        ) : (
          <div>No tracks in playlist</div>
        )}
      </div>
      <button onClick={handleSaveToSpotify}>Save to Spotify</button>
    </section>
  );
}