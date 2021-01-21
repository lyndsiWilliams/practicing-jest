var itemStock = [
  { 'id': '1', 'ItemName': 'Razors', 'Stock': '10' },
  { 'id': '2', 'ItemName': 'Socks', 'Stock': '1' },
  { 'id': '3', 'ItemName': 'Towels', 'Stock': '100' },
  { 'id': '4', 'ItemName': 'Socks', 'Stock': '1000' },
];

function filterItemStock(arr, key, term) {
  return arr.filter(function(obj) {
    return obj[key] === term;
  });
};

test('Returns all items with matching id', () => {
  expect(filterItemStock(itemStock, 'id', '1')).toEqual([
    { 'id': '1', 'ItemName': 'Razors', 'Stock': '10' }
  ]);
});

test('Returns all items with matching item name', () => {
  expect(filterItemStock(itemStock, 'ItemName', 'Socks')).toEqual([
    { 'id': '2', 'ItemName': 'Socks', 'Stock': '1' },
    { 'id': '4', 'ItemName': 'Socks', 'Stock': '1000' },  
  ]);
});


test('Returns all items with matching id', () => {
  expect(filterItemStock(itemStock, 'id', '1')).toMatchSnapshot();
});

test('Returns all items with matching item name', () => {
  expect(filterItemStock(itemStock, 'ItemName', 'Socks')).toMatchSnapshot();
});