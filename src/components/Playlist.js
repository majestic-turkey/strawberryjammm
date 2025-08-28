import React from 'react';

export default function Playlist() {
  return (
<section className="playlist-section">
          <h2>Your Playlist</h2>
          <ul>
            {/* Playlist items will be dynamically added here */}
          </ul>
          <button>Save to Spotify</button>
        </section>
    );
}