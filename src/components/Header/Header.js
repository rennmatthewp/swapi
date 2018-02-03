import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control/Control';

const Header = ({ getPeople }) => {
  return (
    <div>
      <Control getPeople={getPeople} />
    </div>
  );
};

Header.propTypes = {
  getPeople: PropTypes.func
};

export default Header;
