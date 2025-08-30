import React from "react";
import '../styles/Songlist.css';
import Track from './Track';

export default function Songlist({ resultList }) {
  return (
    <section className="songlist-section">
      <h2>Search Results</h2>
      <div className="songlist-tracks">
        {resultList.length > 0 ? resultList.map((track) => (
          <Track key={track.id} {...track} />
        )) : <div>No results found</div>}
      </div>
      <button>Add to Playlist</button>
    </section>
  );
}