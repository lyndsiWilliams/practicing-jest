const multiply = require('./multiply');

describe('Test multiply positive scenarios', () => {
  // You can use either 'it' or 'test' to initiate the test
  test('multiply 3*2 should equal 6', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});

test('object example', () => {
  const data = { first: 1 };
  data['second'] = 2;
  // toBe would fail this test
  expect(data).toEqual({ first: 1, second: 2 });
});

test('multiply 4*3 should not equal 11', () => {
  expect(multiply(4,3)).not.toBe(11);
});