import React, { Component } from 'react';
import CardContainer from "../CardContainer/CardContainer";
import Header from "../Header/Header";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    }
  }

  

  render() {
    return (
      <div>
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default Main;