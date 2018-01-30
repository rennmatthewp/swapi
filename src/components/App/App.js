import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Crawl from "../Crawl/Crawl";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import * as fetch from '../../apiHelper/apiHelper'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Crawl} />
        <Route 
          path='/people' 
          render={ async () => {
            const peopleData = await helpfuntion.getPeopleData()
            return <CardContainer cardData={peopleData}/>
          }} 
        />
      </div>
    );
  }
}

export default App;
