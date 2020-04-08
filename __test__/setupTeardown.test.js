const trigger = require('../js/trigger');

// beforeAll(() => {
//   trigger("beforeAll");
// });

// afterAll(() => {
//   trigger("afterAll");
// });

// beforeEach(() => {
//   trigger("beforeEach");
// });

// afterEach(() => {
//   trigger("afterEach");
// });

// test('test something one', () => {
//   console.log("test something one")
//   expect(true).toBe(true);
// });

// test('test something two', () => {
//   console.log("test something two")
//   expect(true).toBe(true);
// });

// 加入 scope 考量

beforeAll(() => {
  trigger("beforeAll outside");
});

afterAll(() => {
  trigger("afterAll outside");
});

test('test something outside', () => {
  console.log("test something outside")
  expect(true).toBe(true);
});

// describe('describe scope', () => {
//   beforeAll(() => {
//     trigger("beforeAll inside");
//   });
  
//   afterAll(() => {
//     trigger("afterAll inside");
//   });

//   test('test something inside', () => {
//     console.log('test something inside')
//     expect(true).toBe(true);
//   });
// })

describe('describe scope', () => {
  trigger("trigger in describe");
  test('test something inside', () => {
    console.log('test something inside')
    expect(true).toBe(true);
  });
})