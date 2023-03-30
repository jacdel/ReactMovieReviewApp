import React, { useState } from 'react';

const ReviewForm = ({ onReviewSubmit }) => { //take in the onReviewSubmit prop// that is called when the form is submitted with a review text.
  const [reviewText, setReviewText] = useState(''); //set the state variable reviewText using the useState hook// and settin the useState function as empty strng to update later
  // and the setReviewText function will update the reviewText state variable.

 
 //then I define the handleSubmit function to handle when a revie is being submitted with event.
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page frm reloading
    onReviewSubmit(reviewText); //then call the onReviewsubmit(w empty strng) function
    setReviewText(''); //resets the input after submission
  }
 //genertates my form
 //allows users to leave a review for a movie and submit it by clicking the submit
 
 //using the onSubmit it calls my handleSubmit fuctionm

 //using onChange event handler to updATE the reviewText state variable w/ the new value entered by the user.
 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={reviewText}
        onChange={event => setReviewText(event.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;

































