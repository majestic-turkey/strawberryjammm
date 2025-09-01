import './styles/App.css';
import React from 'react';
import Search from './components/Search';
import Songlist from './components/Songlist';
import Playlist from './components/Playlist';

// Mock data for demonstration purposes -- DELETE when API integration is done
import { mockResults } from './components/MockResults';
import { mockPlaylist } from './components/MockPlaylist';

function App() {
  const [results, setResults] = React.useState(mockResults);
  const [playlist, setPlaylist] = React.useState(mockPlaylist);
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to Strawberry Jammm!</h1>
        <h4>Pick some songs, mash 'em to a playlist, and jar your jammm!</h4>
      </header>
      <main className="app-main">
        <Search />
        <div className="lists-container">
        <Songlist
          resultList={results}
          onSearch={setResults}
          onAddToPlaylist={(tracks) =>
            setPlaylist(prev => ({
              ...prev,
              tracks: [...prev.tracks, ...tracks.filter(t => !prev.tracks.some(pt => pt.uri === t.uri))]
            }))
          }
          playlist={playlist}
        />
        <Playlist playList={playlist} onAdd={setPlaylist}/>
        </div>
      </main>
    </div>
  );
}

export default App;
