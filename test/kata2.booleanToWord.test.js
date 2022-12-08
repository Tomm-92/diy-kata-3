const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when the Boolean is true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  test("returns Yes when the Boolean is true", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});
