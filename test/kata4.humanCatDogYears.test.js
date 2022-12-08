const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns an array of 3 numbers when passed a number", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});

// Look Ma, no handlebars!!!
