const { sum, multiply, checkNull } = require("./class-22-testing");

// test("sum of 10 + 10", () => {
//   expect(sum(10, 10)).toBe(20);
// });
// test("sum of 10 * 10", () => {
//   expect(multiply(10, 10)).toBe(100);
// });

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
