const humanCatDogYears = (number) => {
  const catYear = number + 14;
  const dogYear = number + 14;

  if (number === 0) {
    return [0, 0, 0];
  }

  if (number === 1) {
    return [number, catYear, dogYear];
  }

  if (number > 1) {
    return [number, number * 4 + 16, number * 5 + 14];
  }
};

module.exports = humanCatDogYears;
