const trigger = require('../js/trigger');

beforeAll(() => {
  trigger("beforeAll");
});

afterAll(() => {
  trigger("afterAll");
});

test('test sommething one', () => {
  expect(true).toBe(true);
});

test('test sommething two', () => {
  expect(true).toBe(true);
});