const [a, b, c] = require('./app');
test.skip('check app func add', () => {
  expect(a(4)).toBe(5);
});
test.skip('check app func minus', () => {
  expect(b(4)).toBe(3);
});
