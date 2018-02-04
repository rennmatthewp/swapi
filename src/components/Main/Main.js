import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import { fetchPeople, fetchPlanets } from '../../apiHelper/apiHelper';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      favorites: []
    };
  }

  componentDidMount() {
    this.getPlanets()
  }

  getPeople = async () => {
    const people = await fetchPeople();
    this.setState({ people });
  };

  getPlanets = async () => {
    const planets = await fetchPlanets();
    this.setState({ planets })
  }

  render() {
    return (
      <div>
        <Header getPeople={this.getPeople} />
        <CardContainer people={this.state.people} />
      </div>
    );
  }
}

export default Main;
