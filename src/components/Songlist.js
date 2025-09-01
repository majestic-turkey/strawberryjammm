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
    const selectedTracks = resultList.filter(track => selected.includes(track.uri));
    if (onAddToPlaylist) onAddToPlaylist(selectedTracks);
    setSelected([]);
  };

  const playlistTrackIds = (playlist?.tracks || []).map(t => t.uri);
  return (
    <section className="songlist-section">
      <h2>Search Results</h2>
      <div className="songlist-tracks">
        {resultList.length > 0 ? resultList.map((track) => {
          const isSelected = selected.includes(track.uri);
          const isInPlaylist = playlistTrackIds.includes(track.uri);
          return (
            <div
              key={track.uri}
              className={
                isSelected ? "track-selected" : isInPlaylist ? "track-in-playlist" : ""
              }
              onClick={() => handleTrackClick(track.uri)}
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