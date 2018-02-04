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
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
    };
  }

  // componentDidMount() {
  //   this.getVehicles();
  // }

  getPeople = async () => {
    const people = await fetchPeople();
    this.setState({ people });
  };

  getPlanets = async () => {
    const planets = await fetchPlanets();
    this.setState({ planets });
  };

  getVehicles = async () => {
    const vehicles = await fetchVehicles();
    this.setState({ vehicles });
  };

  render() {
    return (
      <div>
        <Header
          getPeople={this.getPeople}
          getPlanets={this.getPlanets}
          getVehicles={this.getVehicles}
        />
        <CardContainer people={this.state.people} />
      </div>
    );
  }
}

export default Main;
