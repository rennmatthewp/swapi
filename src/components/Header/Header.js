import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control/Control';

const Header = ({ getPeople, getPlanets }) => {
  return (
    <div>
      <Control getPeople={getPeople} getPlanets={getPlanets} />
    </div>
  );
};

Header.propTypes = {
  getPeople: PropTypes.func
};

export default Header;
