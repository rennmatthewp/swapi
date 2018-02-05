import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardContainer = ({ cardData, toggleFavorite }) => {
  const cards = cardData.map(cardObj => (
    <Card
      cardObj={cardObj}
      toggleFavorite={toggleFavorite}
      key={cardObj.name}
    />
  ));

  return <div>{cards}</div>;
};

CardContainer.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object),
  toggleFavorite: PropTypes.func
};

export default CardContainer;
