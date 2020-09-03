import React from 'react';
import PropTypes from 'prop-types';

import { StyledActor } from '../../styles/StyledActor';

const Actor = ({ actor }) => (
  <StyledActor>

    <span className="actor-name">{actor.name}</span>

  </StyledActor>
);

Actor.propTypes = {
  actor: PropTypes.object,
}

export default Actor;
