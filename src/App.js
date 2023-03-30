

import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';

// set up of the structure for my app that displays a list of movies and the reviews

function App() {
  const [movies, setMovies] = useState([]); //movies as the state variable as an empty array

  const addReview = (movieTitle, reviewText) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.title === movieTitle) {
        return { ...movie, reviews: [...movie.reviews, reviewText] };
      }
      return movie;
    });
    setMovies(updatedMovies); // rerenders the movies based on the movies array
  };

  return (
    <div className="App">
      <MovieList movies={movies} addReview={addReview} />
    </div>
  );
}

export default App;
