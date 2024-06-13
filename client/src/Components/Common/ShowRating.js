import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import PrettyRating from 'pretty-rating-react';
import React ,{ useState } from 'react';



const ShowRating = ({ value }) => {
  // const icons = {
  //   star: {
  //     complete: faStar,
  //     half: faStarHalfAlt,
  //     empty: faStar,
  //   },
  // };
  // const colors = {
  //   star: ['#FFDF00', '#FFDF00', '#D3D3D3'],
  // };
  // return <PrettyRating value={value} icons={icons.star} colors={colors.star} />;
  // // return <div > error</div>
    const [rating, setRating] = useState(value || 0);
  
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

export default ShowRating;
