export const getFilm = async () => {
  const fetchCrawlData = await fetch(`https://swapi.co/api/films/1`);
  const crawlData = await fetchCrawlData.json();
  const openingCrawl = crawlData.opening_crawl;
  const title = crawlData.title;
  const releaseDate = crawlData.release_date;
  const episodeId = crawlData.episode_id;
  const crawlFilm = { openingCrawl, title, releaseDate, episodeId };
  return crawlFilm;
};

// const filmNum = Math.ceil(Math.random * 7);

// export const getFilm = () => {
//   fetch(`https://swapi.co/api/films/7`)
//     .then(response => response.json())
//     .then(result => console.log(result));
// };
