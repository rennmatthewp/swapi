import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardContainer = ({ people }) => {
  const cards = people.map(person => <Card {...person} key={person.name} />);
  return <div>{cards}</div>;
};

CardContainer.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object)
};

export default CardContainer;
