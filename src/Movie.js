
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ title, synopsis, rating, reviews, addReview }) => { //Movie component takes these props and the addReviw function defined in the movieList component
  const [movieReviews, setMovieReviews] = useState(reviews); // using useState to update it.

  
  //now i define the HandleReviewSubmit which takes the review parameter and its called when users submit a new review.
  const handleReviewSubmit = (review) => {

    // setMovieReviews is used to update the movieReviews state variable with the new review.
    setMovieReviews([...movieReviews, { text: review, id: movieReviews.length + 1 }]); //setMovieReviews function takes in a new array created using the spread operator to copy the existing movieReviews array and add a new object to it. 
    addReview(review); //within this function i call the add review fuction to add that new review once user submits it.
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{synopsis}</p>
      <Stars rating={rating} />
      <ReviewList reviews={movieReviews} />
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
    </div>
  );
};

export default Movie 