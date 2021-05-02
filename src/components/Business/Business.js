import React from 'react';

import "./Business.css";

export default function Business({business}) {
  const {image_url, name, price, rating, review_count} = business; 
  return (
    <div className="Business">
      <div className="image-container">
        <img
          src={image_url}
          alt=""
        />
      </div>
      <h2 href={`${business.url}`}>{name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.location.address1}</p>
          <p>{business.location.city}</p>
          <p>{business.location.zip_code}</p>
        </div>
        <div className="Business-reviews">
          <h3>{price}</h3>
          <h3 className="rating">{rating}</h3>
          <p>{review_count} reviews</p>
        </div>
      </div>
    </div>
  )
}
