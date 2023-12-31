import React, { useState } from 'react';
import Search from './Search';
import SearchResults from './SearchResults.js';
import '../styles/App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa logo"
      />
      <h1 className="main-title">Space Search</h1>
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
