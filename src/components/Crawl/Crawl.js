import React from 'react';
// import PropTypes from 'prop-types';

const Crawl = ({ title, openingCrawl }) => {  
  return (
    <div className="crawl">
      <h3>{title}</h3>
      <p>{openingCrawl}</p>
    </div>
  );
};

// Crawl.propTypes = {
//   title: PropTypes.string,
//   crawlText: PropTypes.arrayOf(PropTypes.string),
//   releaseData: PropTypes.string,
//   poster: PropTypes.string
// };

export default Crawl;