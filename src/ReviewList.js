import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => { //takes in reviews prop (an array of reviews)
  return (
    <div>
      {reviews.map(review => (
        <Review key={review.id} text={review.text} />
      ))}
    </div>
  );
};

//creates a list component that takes in an array of review objects and creates the list of reviews by rendering the Review component 
//for each review object in the array.

export default ReviewList;
