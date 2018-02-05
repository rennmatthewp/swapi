import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Control = ({ getCardData, displayFavorites}) => {
  return (
    <div>
      <NavLink to="/main/people">
        <button name="people" onClick={event => getCardData(event.target.name)}>
          People
        </button>
      </NavLink>
      <NavLink to="/main/planets">
        <button
          name="planets"
          onClick={event => getCardData(event.target.name)}>
          Planets
        </button>
      </NavLink>
      <NavLink to="/main/vehicles">
        <button
          name="vehicles"
          onClick={event => getCardData(event.target.name)}>
          Vehicles
        </button>
      </NavLink>
      <NavLink to="/main/favorites">
        <button
          name="favorites"
          onClick={displayFavorites}>
          Favorites
        </button>
      </NavLink>
    </div>
  );
};

Control.propTypes = {
  getPeople: PropTypes.func
};

export default Control;
