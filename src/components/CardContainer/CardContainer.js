import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardContainer = ({ cardData }) => {
  const cards = cardData.map(cardObj => (
    <Card {...cardObj} key={cardObj.name} />
  ));

  return <div>{cards}</div>;
};

CardContainer.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object)
};

export default CardContainer;
