import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Crawl = ({ crawlText, episode, releaseDate, title }) => {
  const story = crawlText
    ? crawlText.map((paragraph, index) => <p key={index}>{paragraph}</p>)
    : null;    

  return (
    <Link to="/main">
      <div className="crawl">
        crwal
        <h3>EPISODE {episode}</h3>
        <h3>{title}</h3>
        {story}
        <h3>{releaseDate}</h3>
      </div>
    </Link>
  );
};

Crawl.propTypes = {
  crawlText: PropTypes.arrayOf(PropTypes.string),
  episode: PropTypes.number,
  releaseDate: PropTypes.string,
  title: PropTypes.string
};

export default Crawl;
