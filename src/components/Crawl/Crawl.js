import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getFilm } from "../../apiHelper/apiHelper";

class Crawl extends Component {
  constructor() {
    super();
    this.state = {
      filmObj: {}
    }
  }

  async componentDidMount() {
    const filmObj = await getFilm();
    this.setState({ filmObj })
  }

  render() {
    return (
      <div className="crawl">
        <h3>{this.state.filmObj.title}</h3>
        <p>{this.state.filmObj.openingCrawl}</p>
        <Link to="/main">
          <button>X</button>
        </Link>
      </div>
    );
  }
}

export default Crawl;
