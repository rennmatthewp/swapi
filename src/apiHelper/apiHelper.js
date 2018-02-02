export const getFilm = async () => {
  const number = Math.ceil(Math.random() * 7);
  const crawlData = await fetchAndParse(`https://swapi.co/api/films/${number}`);
  return cleanCrawlData(crawlData);
};

const fetchAndParse = url => fetch(url).then(res => res.json());

const cleanCrawlData = rawCrawlData => {
  const lineBreak = new RegExp(/\s{4,}/, 'g');

  const openingCrawl = rawCrawlData.opening_crawl
    .replace(lineBreak, '###')
    .split('###');

  return {
    crawlText: openingCrawl,
    episode: rawCrawlData.episode_id,
    releaseDate: rawCrawlData.release_date,
    title: rawCrawlData.title.toUpperCase()
  };
};
