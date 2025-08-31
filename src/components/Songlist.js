import React, { useState } from "react";
import '../styles/Songlist.css';
import Track from './Track';

export default function Songlist({ resultList, onAddToPlaylist, playlist }) {
  const [selected, setSelected] = useState([]);

  const handleTrackClick = (trackId) => {
    setSelected((prev) =>
      prev.includes(trackId)
        ? prev.filter(id => id !== trackId)
        : [...prev, trackId]
    );
  };

  const handleAddToPlaylist = () => {
    const selectedTracks = resultList.filter(track => selected.includes(track.id));
    if (onAddToPlaylist) onAddToPlaylist(selectedTracks);
    setSelected([]);
  };

  const playlistTrackIds = (playlist?.tracks || []).map(t => t.id);
  return (
    <section className="songlist-section">
      <h2>Search Results</h2>
      <div className="songlist-tracks">
        {resultList.length > 0 ? resultList.map((track) => {
          const isSelected = selected.includes(track.id);
          const isInPlaylist = playlistTrackIds.includes(track.id);
          return (
            <div
              key={track.id}
              className={
                isSelected ? "track-selected" : isInPlaylist ? "track-in-playlist" : ""
              }
              onClick={() => handleTrackClick(track.id)}
              style={{ cursor: 'pointer' }}
            >
              <Track {...track} />
            </div>
          );
        }) : <div>No results found</div>}
      </div>
      <button onClick={handleAddToPlaylist} disabled={selected.length === 0}>Add to Playlist</button>
    </section>
  );
}