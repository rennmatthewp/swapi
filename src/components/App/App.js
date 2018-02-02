import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Crawl from '../Crawl/Crawl';
import Main from '../Main/Main';
// import CardContainer from "../CardContainer/CardContainer";
// import * as fetch from '../../apiHelper/apiHelper'
import './App.css';

import { getFilm } from '../../apiHelper/apiHelper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  async componentDidMount() {
    const filmObj = await getFilm();
    this.setState({ ...filmObj });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <Crawl {...this.state} /> 
          )} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
