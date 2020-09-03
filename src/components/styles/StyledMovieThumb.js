import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    /* min-height: 340px; */
 
    object-fit: cover;
    border-radius: 5px;
 

 

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
