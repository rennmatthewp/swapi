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

  toggleFavorite = dataObj => {
    const {favorites} = this.state;

    if (favorites.includes(dataObj)) {
      const newState = favorites.filter( elem => elem !== dataObj)
      this.setState({ favorites: newState });
    } else {
      this.setState({ favorites: [...favorites, dataObj] });
    }
  };

  render() {
    return (
      <div>
        <Header getCardData={this.getCardData} />
        <CardContainer
          cardData={this.state.cardData}
          toggleFavorite={this.toggleFavorite}
        />
      </div>
    );
  }
}

export default Main;
