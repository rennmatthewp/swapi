import React from 'react';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const Crawl = ({ title, openingCrawl }) => {  
  return (
    <div className="crawl">
      <h3>Episode Bkuuee</h3>
      <p>yes sure</p>
      <Link to='/main'>
        <button>X</button>
      </Link>
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