import React from 'react';

import Business from '../Business/Business';

import './BusinessList.css';

export default function BusinessList({businesses}) {
    
    const renderedList = businesses.map((business)=> {
        return <Business business={business} />
    })

    return (
        <div className="BusinessList">
            {renderedList}
        </div>
    )
}