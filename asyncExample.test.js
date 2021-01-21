// Assume fetchDataOverApi returns data from external API
const fetchDataOverApi = require('./fetchData.js');

// Non-async example
test('the user data for user 1', () => {
  const data = fetchDataOverApi();
  expect(data).toBe('John');
});

// Async example
test.only('the user data for user 1', async() => {
  const data = await fetchDataOverApi();
  expect(data).toBe('John');
});