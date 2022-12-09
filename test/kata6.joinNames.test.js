const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "John" },
      ])
    ).toEqual("Bart, Lisa, Maggie & John");
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toEqual("Bart, Lisa & Maggie");
    expect(joinNames([{ name: "Bart" }, { name: "Lisa" }])).toEqual(
      "Bart & Lisa"
    );
    expect(
      joinNames([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Homer" },
        { name: "Marge" },
      ])
    ).toEqual("Bart, Lisa, Maggie, Homer & Marge");
  });
});
