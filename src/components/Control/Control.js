import React from 'react';
import PropTypes from 'prop-types';

const Control = ({ getPeople, getPlanets, getVehicles }) => {
  return (
    <div>
      <button onClick={getPeople}>People</button>
      <button onClick={getPlanets}>Planets</button>
      <button onClick={getVehicles}>Vehicles</button>
    </div>
  );
};

Control.propTypes = {
  getPeople: PropTypes.func
};

export default Control;
