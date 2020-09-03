import React from 'react';
import {
  POSTER_SIZE,
  IMAGE_BASE_URL,
} from '../config';

// import Components
import Grid from './elements/Grid/Grid';
import MovieThumb from './elements/MovieThumb/MovieThumb';

import Spinner from './elements/Spinner/Spinner';

// Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [
    {
      state: { movies  },
      loading,
      error,
    },

  ] = useHomeFetch();




  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  return (
      <>
        <Grid header={'Landing Page'}>
          {movies.map(movie => (
              <MovieThumb
                  key={movie.id}
                  clickable
                  image={
                    movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : NoImage
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
              />
          ))}
        </Grid>
        {loading && <Spinner />}

      </>
  );
};

export default Home;
