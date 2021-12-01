// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

const {isAmountInvalid} = require(`../test/funtion.validation`);

describe(`isAmountInvalid()`, () => {
  test('Should return "true" due to lack of input', () => {
    let amount;
    const result = isAmountInvalid(amount);
    expect(result).toBe(true);
  });

  test('Should return "true" due to a number less than 0', () => {
    let amount = -3;
    const result = isAmountInvalid(amount);
    expect(result).toBe(true);
  });

  test('Should return "false" due to a supported input', () => {
    let amount = 3;
    const result = isAmountInvalid(amount);
    expect(result).toBe(false);
  });
});
