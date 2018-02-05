import React from 'react';
import PropTypes from 'prop-types';
import Control from '../Control/Control';

const Header = ({ getCardData, displayFavorites }) => {
  return (
    <div>
      <Control getCardData={getCardData} displayFavorites={displayFavorites} />
    </div>
  );
};

Header.propTypes = {
  getCardData: PropTypes.func,
  displayFavorites: PropTypes.func
};

export default Header;
