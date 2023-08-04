import counter from '../modules/counter.js';

describe('Shows counter test', () => {
  const shows = [
    {
      name: 'The 100',
      image: 'the100.png',
      id: '1',
    },
    {
      name: 'The flash',
      image: 'theflash.png',
      id: '2',
    },
    {
      name: 'Into the badlands',
      image: 'intothebadlands.png',
      id: '3',
    },
  ];
  test('count number of shows', () => {
    const showCount = counter.countShows(shows);
    expect(showCount).toBe(3);
  });
});