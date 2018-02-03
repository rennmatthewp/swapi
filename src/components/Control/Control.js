import React from 'react';
import PropTypes from 'prop-types';

const Control = ({ getPeople }) => {
  return (
    <div>
      <button onClick={getPeople}>People</button>
    </div>
  );
};

Control.propTypes = {
  getPeople: PropTypes.func
};

export default Control;
