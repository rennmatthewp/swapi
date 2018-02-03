import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import { fetchPeople } from '../../apiHelper/apiHelper';

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

  async componentDidMount() {
    const people = await fetchPeople();
    this.setState({ people });
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
