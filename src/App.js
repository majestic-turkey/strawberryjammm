import './styles/App.css';
import React from 'react';
import Search from './components/Search';
import Songlist from './components/Songlist';
import Playlist from './components/Playlist';
import { mockResults } from './components/MockResults';

const results = mockResults;

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to Strawberry Jammm!</h1>
        <h4>Pick some songs, mash 'em to a playlist, and jar your jammm!</h4>
      </header>
      <main className="app-main">
        <Search />
        <div className="lists-container">
        <Songlist resultList={results} />
        <Playlist />
        </div>
      </main>
    </div>
  );
}

export default App;
