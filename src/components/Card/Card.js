import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  const info = Object.keys(props).map(key => (
    <h5 key={key}>
      {key}: {props[key]}
    </h5>
  ));

  return <div className="card">{info}</div>;
};

Card.propTypes = {
  props: PropTypes.objectOf(PropTypes.string)
};

export default Card;
