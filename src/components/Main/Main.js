import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import {
  fetchPeople,
  fetchPlanets,
  fetchVehicles
} from '../../apiHelper/apiHelper';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      cardData: []
    };
    this.fetch = {
      people: fetchPeople,
      planets: fetchPlanets,
      vehicles: fetchVehicles
    };
  }

  getCardData = async type => {
    const cardData = await this.fetch[type]();
    this.setState({ cardData });
  };

  render() {
    return (
      <div>
        <Header getCardData={this.getCardData} />
        <CardContainer cardData={this.state.cardData} />
      </div>
    );
  }
}

export default Main;
