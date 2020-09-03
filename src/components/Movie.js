import React from 'react';

// Components
import Navigation from './elements/Navigation/Navigation';
import MovieInfo from './elements/MovieInfo/MovieInfo';
import Actor from './elements/Actor/Actor';
import Grid from './elements/Grid/Grid';
import Spinner from './elements/Spinner/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movie);
  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
  <>
    <Navigation movie={movie.original_title} />
    <MovieInfo movie={movie} />

    <Grid header="Cast">
      {movie.actors && movie.actors.map(actor => (
        <Actor key={actor.credit_id} actor={actor} />
      ))}     
    </Grid>
  </>
  )
};

export default Movie;