import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Crawl.css';

const Crawl = ({ crawlText, episode, releaseDate, title }) => {
  const story = crawlText
    ? crawlText.map((paragraph, index) => <p key={index}>{paragraph}</p>)
    : null;

  return (
    <Link to="/main" className="link">
      <div className="fade" />
      <div className="crawl">
        <div className="content">
          <div className="title">
            <h4>Episode {episode}</h4>
            <h3>{title}</h3>
          </div>
          {story}
          <h4>{releaseDate}</h4>
        </div>
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
