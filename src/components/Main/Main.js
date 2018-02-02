import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';

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
    const people = await fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(result =>
        result.results.map(person => {
          return Promise.all([
            fetch(person.homeworld).then(res => res.json()),
            fetch(person.species[0]).then(res => res.json())
          ]).then(([homeworld, species]) => Object.assign({}, person, {homeworld: homeworld.name, species: species.name}));
        })
      )

      .catch(error => console.log('error:', error));
    console.log('peopel:', people)
    
    Promise.all(people).then(res => console.log('GIVE IT ', res));
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
