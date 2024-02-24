import React from 'react';
import './Cards.css'; // Import CSS file

const Card = ({ title, description, images, nav }) => {
    return (
        <>
        
        <div className="card">
            <img src={images} alt="Card" className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
            </div>
        </div>
        </>
    );
};

export default Card;
