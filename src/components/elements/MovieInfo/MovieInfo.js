import React from 'react';
import PropTypes from 'prop-types';

import NoImage from '../../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../config';

import MovieThumb from '../MovieThumb/MovieThumb';

import { StyledMovieInfo } from '../../styles/StyledMovieInfo';

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo >
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="moviethumb"
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.title}</h1>

     

      </div>
    </div>
  </StyledMovieInfo>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
}

export default MovieInfo;
