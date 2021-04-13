const { myWonderfulFunc } = require('..');

describe('myWonderfulFunc', () => {
  test('returns sum of 2 numbers', () => {
    expect(myWonderfulFunc(1, 2)).toBe(3);
  });
});