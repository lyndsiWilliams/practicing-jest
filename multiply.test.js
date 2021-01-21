const multiply = require('./multiply');

describe('Test multiply positive scenarios', () => {
  // You can use either 'it' or 'test' to initiate the test
  test('multiply 3 * 2 should equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});