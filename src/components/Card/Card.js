import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ cardObj, toggleFavorite }) => {
  const info = Object.keys(cardObj).map(key => (
    <h5 key={key}>
      <span>{key}</span>: {cardObj[key]}
    </h5>
  ));

  const favButton = (
    <button
      onClick={() => {
        toggleFavorite(cardObj);
      }}>
      X
    </button>
  );

  return (
    <div className="card">
      {favButton}
      {info}
    </div>
  );
};

Card.propTypes = {
  cardObj: PropTypes.objectOf(PropTypes.string),
  toggleFavorite: PropTypes.func
};

export default Card;
