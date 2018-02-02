import React from 'react';
import { Link } from 'react-router-dom';

const Crawl = ({ crawlText, episode, releaseDate, title }) => {

  console.log(crawlText)
  
  let story
  if (crawlText) {
    story = crawlText.map( paragraph => <p>{paragraph}</p> )
  }
  
  return (
    <Link to="/main">
      <div className="crawl">
        crwal
        <h3>Episode {episode}</h3>
        <h3>{title}</h3>
        {/* {crawlText &&
          crawlText.map((paragraph, i) => <p key={i}>{paragraph}</p>)} */}
        {story}
        <h3>{releaseDate}</h3>
      </div>
    </Link>
    );
  }

export default Crawl;
