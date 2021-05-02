import {useState} from 'react';

import logo from './logo.svg';

import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp';

import './App.css';

function App() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');
  const [businesses, setBusinesses] = useState([]);

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const searchYelp = () => {
    Yelp(term, location, sortBy).then( response => {
      console.log(response);
      if(response) {
        setBusinesses(response.data.businesses);
      } if (!response) {
        setBusinesses('something went wrong');
      }
    })
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} sortByOptions={sortByOptions} sortBy={sortBy} setSortBy={setSortBy} setTerm={setTerm} setLocation={setLocation} />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
