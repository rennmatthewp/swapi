import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Control = ({ getCardData }) => {
  return (
    <div>
      <Link to="/main/people">
        <button name="people" onClick={event => getCardData(event.target.name)}>
          People
        </button>
      </Link>
      <Link to="/main/planets">
        <button
          name="planets"
          onClick={event => getCardData(event.target.name)}>
          Planets
        </button>
      </Link>
      <Link to="/main/vehicles">
        <button
          name="vehicles"
          onClick={event => getCardData(event.target.name)}>
          Vehicles
        </button>
      </Link>
    </div>
  );
};

Control.propTypes = {
  getPeople: PropTypes.func
};

export default Control;
