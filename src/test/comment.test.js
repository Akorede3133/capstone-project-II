import counter from '../modules/counter.js';

describe('Comments counter test', () => {
  const comments = [
    {
      username: 'Nelofar',
      comment: 'Not bad',
      creation_date: '2023-10-25',
    },
    {
      username: 'Joy',
      comment: 'Great erotic story!',
      creation_date: '2023-10-25',
    },
  ];
  test('Count of length 2 equals 2', () => {
    const value = counter.countComments(comments);
    expect(value).toBe(2);
  });
});