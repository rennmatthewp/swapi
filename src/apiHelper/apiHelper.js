const fetchAndParse = url => fetch(url).then(res => res.json());

const cleanCrawlData = ({ episode_id, opening_crawl, release_date, title }) => {
  const lineBreak = new RegExp(/\s{4,}/, 'g');
  const openingCrawl = opening_crawl.replace(lineBreak, '###').split('###');

  return {
    crawlText: openingCrawl,
    episode: episode_id,
    releaseDate: release_date,
    title: title.toUpperCase()
  };
};

export const fetchFilm = async () => {
  const number = Math.ceil(Math.random() * 7);
  const crawlData = await fetchAndParse(`https://swapi.co/api/films/${number}`);
  return cleanCrawlData(crawlData);
};

export const fetchPeople = async () => {
  try {
    const initialFetch = await fetchAndParse('https://swapi.co/api/people/');
    const people = initialFetch.results.map(async person => {
      const homeworld = await fetchAndParse(person.homeworld);
      const species = await fetchAndParse(person.species);
      return {
        name: person.name,
        homeworld: homeworld.name,
        homeWorldPop: homeworld.population,
        species: species.name
      };
    });

    return Promise.all(people);
  } catch (error) {
    console.log('Error in fetchPeople:', error);
  }
};

const fetchResident = async url => {
  const resident = await fetchAndParse(url).name;
  return resident.name;
};

export const fetchPlanets = async () => {
  try {
    const initialFetch = await fetchAndParse('https://swapi.co/api/planets/');
    const planets = initialFetch.results.map(async planet => {
      const residentPromises = planet.residents.map(
        async person => await fetchResident(person)
      );
      const residents = await Promise.all(residentPromises);

      return {
        name: planet.name,
        climate: planet.climate,
        population: planet.population,
        residents: residents.join(', '),
        terrain: planet.terrain
      };
    });

    return Promise.all(planets);
  } catch (error) {
    console.log('error in fetchPlanets:', error);
  }
};

export const fetchVehicles = async () => {
  try {
    const initialFetch = await fetchAndParse('https://swapi.co/api/vehicles/');
    const vehicles = initialFetch.results.map(vehicle => {

      return {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        capacity: vehicle.passengers
      };
    });

    return vehicles;
  } catch (error) {
    console.log('error in fetchVehicles:', error);
  }
};
