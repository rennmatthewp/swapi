import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Crawl from '../Crawl/Crawl';
import Main from '../Main/Main';
// import CardContainer from "../CardContainer/CardContainer";
// import * as fetch from '../../apiHelper/apiHelper'
import './App.css';

import { fetchFilm } from '../../apiHelper/apiHelper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmObj: {}
    };
  }

  async componentDidMount() {
    const filmObj = await fetchFilm();
    this.setState({ filmObj });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <Crawl {...this.state.filmObj} /> 
          )} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
