import React from 'react';

import "./Business.css";

export default function Business({business}) {
  const {imageSrc, name, adress, city, zipCode, category, rating, reviewCount} = business; 
  return (
    <div class="Business">
      <div class="image-container">
        <img
          src={imageSrc}
          alt=""
        />
      </div>
      <h2>{name}</h2>
      <div class="Business-information">
        <div class="Business-address">
          <p>{adress}</p>
          <p>{city}</p>
          <p>{zipCode}</p>
        </div>
        <div class="Business-reviews">
          <h3>{category}</h3>
          <h3 class="rating">{rating}</h3>
          <p>{reviewCount}</p>
        </div>
      </div>
    </div>
  )
}
