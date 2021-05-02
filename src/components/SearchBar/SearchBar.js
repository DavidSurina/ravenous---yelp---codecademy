import React, {useState} from 'react';

import './SearchBar.css';

export default function SearchBar({searchYelp, sortByOptions, sortBy, setSortBy, setTerm, setLocation}) {

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
    searchYelp();
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
