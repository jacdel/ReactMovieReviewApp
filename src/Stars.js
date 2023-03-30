import React from 'react';

const Stars = ({ rating }) => {
  const filledStars = '★'; 
  const emptyStars = '☆';

  return (
    <div>
      {filledStars}{emptyStars}
    </div>
  );
};
// this generates a visual representation of the rating.
export default Stars;


//i could not get this part to work unfortunately 