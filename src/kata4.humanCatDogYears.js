const humanCatDogYears = (number) => {
  const humanAge = number;
  const catYear = number + 14;
  const dogYear = number + 14;


  if (humanAge === 0) {
    return [0, 0, 0];
  }

  if (humanAge === 1) {
    return [humanAge, catYear, dogYear];
  }

  if (humanAge > 1) {
    return [humanAge, humanAge * 4 + 16, humanAge * 5 + 14];
  }
};

module.exports = humanCatDogYears;
