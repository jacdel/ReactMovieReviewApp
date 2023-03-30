import React, { useState } from 'react';
import Movie from './Movie';


//array of movies and some hard coded reviews
const movieData = [
  {
    title: 'Spirited Away',
    synopsis: 'Miyazaki, 10-year-old Chihiro and her parents stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku.',
    reviews: [
      { text: 'One of my all-time favorite movies!', id: 1 },
      { text: 'Just Magical.', id: 2 },
    ]
  },
  {
    title: 'Pokémon: The First Movie',
    synopsis: ' is a 1998 Japanese anime fantasy adventure film[4] directed by Kunihiko Yuyama. It is the first theatrical release in the Pokémon franchise. The film was first released in Japan on July 18, 1998',
    rating: 5,
    reviews: [
      { text: 'heart warming.', id: 1 },
      { text: 'I could watch this movie over and over again.', id: 2 },
    ]
  }
];

//the function to update the the list using the useState 
const MovieList = () => {
  const [movies, setMovies] = useState(movieData);


  // defined the addReview function here taking 2 parameteres 
  const addReview = (movieTitle, reviewText) => {
    const updatedMovies = movies.map(movie => {
      if (movie.title === movieTitle) { //if movie.title matches the title then the reviews array is updated with that new object
        return {
          ...movie,
          reviews: [
            ...movie.reviews,
            { text: reviewText, id: movie.reviews.length + 1 } 
          ]
        };
      } else {
        return movie; //or just return the original movie object
      }
    });
    setMovies(updatedMovies); // then call the setMovies function with the new 'updatedMovies array from above to updtae the state variable 'movies' which inclused the new reviews.
  }; 

  //then this generates a list of 'movie' components based on the 'movies' array and passes a 'addReview' rop to each movie
  //allows users to add reviews

  //returns a div wrapping the list of movies rendered as movie components
  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.title} {...movie} addReview={(reviewText) => addReview(movie.title, reviewText)} /> //each movie component recieves a key prop,//using the spread operator to also include the movies properties
      ))}
    </div> //finally passing in the addReview function  as a prop, allows the movie component to add review when submitted
  );
};

export default MovieList;





































// import React from 'react';
// import Movie from './Movie';

// const movieData = [
//   {
//     title: 'The Shawshank Redemption',
//     synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
//     rating: 4,
//     reviews: [
//       { text: 'One of my all-time favorite movies!', id: 1 },
//       { text: 'So inspiring!', id: 2 },
//     ]
//   },
//   {
//     title: 'The Godfather',
//     synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
//     rating: 5,
//     reviews: [
//       { text: 'A masterpiece!', id: 1 },
//       { text: 'I could watch this movie over and over again.', id: 2 },
//     ]
//   }
// ];

// const MovieList = () => {
//   return (
//     <div>
//       {movieData.map(movie => (
//         <Movie key={movie.title} {...movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;