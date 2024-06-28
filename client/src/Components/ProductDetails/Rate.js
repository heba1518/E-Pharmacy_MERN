import React, { useState } from 'react';
import './RatingStars.css'; // Import CSS file for styling

const RatingStars = () => {
  const [rating, setRating] = useState(0);

  // Function to handle when a star is clicked
  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={starValue <= rating ? 'star filled' : 'star'}
          onClick={() => handleStarClick(starValue)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;