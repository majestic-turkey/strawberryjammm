
import React from 'react';
import '../styles/Search.css';

export default function Search() {
  return (
        <section className="search-section">
          <h2>Search for Songs</h2>
          <input className="search-input" type="text" placeholder="Search by song, artist, or album" />
          <button className="search-btn">Search</button>
        </section>
    );
}