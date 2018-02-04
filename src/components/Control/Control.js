import React from 'react';
import PropTypes from 'prop-types';

const Control = ({ getPeople, getPlanets }) => {
  return (
    <div>
      <button onClick={getPeople}>People</button>
      <button onClick={getPlanets}>Planets</button>
    </div>
  );
};

Control.propTypes = {
  getPeople: PropTypes.func
};

export default Control;
