import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getFilm } from '../../apiHelper/apiHelper';

class Crawl extends Component {
  constructor() {
    super();
    this.state = {
      filmObj: {}
    };
  }

  async componentDidMount() {
    const filmObj = await getFilm();
    this.setState({ filmObj });
  }

  render() {
    const { crawlText, episode, releaseDate, title } = this.state.filmObj;

    // {this.state.filmObj.crawlText &&
    //   this.state.filmObj.crawlText.map( paragraph => <p>{paragraph}</p>)
    // }
    return (
      <div className="crawl">
        <h3>Episode {episode}</h3>
        <h3>{title}</h3>
        {crawlText}
        <h3>{releaseDate}</h3>
        <Link to="/main">
          <button>X</button>
        </Link>
      </div>
    );
  }
}

export default Crawl;
