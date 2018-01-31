import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Crawl from "../Crawl/Crawl";
import Main from "../Main/Main";
// import CardContainer from "../CardContainer/CardContainer";
// import * as fetch from '../../apiHelper/apiHelper'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch> 
        <Route exact path='/' component={Crawl} />
        <Route exact path='/main' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
