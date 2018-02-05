import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control/Control';

const Header = ({ getCardData }) => {
  return (
    <div>
      <Control
        getCardData={getCardData}
      />
    </div>
  );
};

Header.propTypes = {
  getPeople: PropTypes.func
};

export default Header;
