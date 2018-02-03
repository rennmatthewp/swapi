import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, homeworld, homeWorldPop, species }) => {
  console.log('opp:', homeWorldPop)
  
  return (
    <div>
      <h3>{name}</h3>
      <h5>species: {species}</h5>
      <h5>homeworld: {homeworld}</h5>
      <h5>homeworld population: {homeWorldPop}</h5>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  homeworldPop: PropTypes.string,
  species: PropTypes.string
};

export default Card;
