const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I will be there in 4.5 hours.");
    expect(reachDestination(0, 0)).toEqual("I am here");
    expect(reachDestination(1, 0)).toEqual("The train has broken down");
    expect(reachDestination(22, 10)).toEqual("I will be there in 2 hours.");
    expect(reachDestination(75, 5)).toEqual("I will be there in 15 hours.");
  });
});
