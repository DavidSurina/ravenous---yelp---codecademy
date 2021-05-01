import React, {useState} from 'react';

import './SearchBar.css';

export default function SearchBar({searchYelp}) {
  
  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={()=> {setSortBy(sortByOptionValue)}}>{sortByOption}</li>;
    });
  };

  const getSortByClass = (sortByOption) => {
    if(sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };

  const handleSearch = (e) => {
    searchYelp(term, location, sortBy);
    e.preventDefault();
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={(e) => {setTerm(e.target.value)}}/>
        <input placeholder="Where?" onChange={(e) => {setLocation(e.target.value)}}/>
      </div>
      <div className="SearchBar-submit">
        <a onClick={(e)=> {handleSearch(e)}}>Let's Go</a>
      </div>
    </div>
  );
}
