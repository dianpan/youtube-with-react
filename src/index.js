import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyC94_VHYzeBPly6_gRM61l_jbXqwQ7uYQc'

//1. create a new component which produces some html
const App = () => {
  return (
    <div>
      Youtubular
      <SearchBar />
    </div>
  );
}

//2. create an instance of the App function
// insert the generated html into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
