import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl, affiliation  }) => (
  <section>
    <h2>{name}</h2>
    <p>{affiliation}</p>
    <img src={photoUrl}></img>
  </section>
);

Character.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  affiliation: PropTypes.string,
		
};

export default Character;
