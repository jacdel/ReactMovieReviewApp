import React from 'react';

const Review = ({ text }) => { //passing in the text prop which are the hard coded review// returns a paragraf and inside the review
  return (
    <div>
      <p>{text}</p> 
    </div>
  );
};

export default Review;
