const trigger = require('../js/trigger');

beforeAll(() => {
  trigger("beforeAll");
});

afterAll(() => {
  trigger("afterAll");
});

test('test something one', () => {
  console.log("test something one")
  expect(true).toBe(true);
});

test('test something two', () => {
  console.log("test something two")
  expect(true).toBe(true);
});