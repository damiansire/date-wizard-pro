const testTest = require("../index");

test("Testing 'scream' function", () => {

  expect(testTest.test(2,2)).toBe(0);
  expect(testTest.test(3,3)).toBe(0);
  expect(testTest.test(5,4)).toBe(1);

});
