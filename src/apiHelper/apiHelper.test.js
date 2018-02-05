import * as api from './apiHelper';
import mockData from '../../__mocks__/mockData';

window.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({
        data: {}
      })
  });
});

describe('apiHelper', () => {
  it('fetchAndParse should return a resolved promise', async () => {
    expect(await api.fetchAndParse('url')).toEqual({ data: {} });
  });

  it('cleanCrawlData should return properly formatted film object', () => {
    expect(api.cleanCrawlData(mockData.movieData)).toEqual({
      crawlText: ['First.', 'Second.', 'Third.'],
      episode: 5,
      releaseDate: '1980-05-17',
      title: 'THE EMPIRE STRIKES BACK'
    });
  });
});
