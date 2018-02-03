import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import { fetchPeople } from '../../apiHelper/apiHelper';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      favorites: []
    };
  }

  // async componentDidMount() {
  //   this.getPeople()
  // }

  getPeople = async () => {
    const people = await fetchPeople();
    this.setState({ people });
  };

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
