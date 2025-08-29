import React from "react";
import '../styles/Songlist.css';

export default function Songlist({ resultList }) {
  return (
    <section className="songlist-section">
      <h2>Search Results</h2>
      <ul>
        {resultList.length > 0 ? resultList.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artist} ({track.album})
          </li>
        )) : <li>No results found</li>}
      </ul>
      <button>Add to Playlist</button>
    </section>
  );
}