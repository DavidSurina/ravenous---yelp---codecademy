import React from 'react';

import "./Business.css";

export default function Business({business}) {
  const {imageSrc, name, adress, city, zipCode, category, rating, reviewCount} = business; 
  return (
    <div className="Business">
      <div className="image-container">
        <img
          src={imageSrc}
          alt=""
        />
      </div>
      <h2>{name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{adress}</p>
          <p>{city}</p>
          <p>{zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{category}</h3>
          <h3 className="rating">{rating}</h3>
          <p>{reviewCount}</p>
        </div>
      </div>
    </div>
  )
}
