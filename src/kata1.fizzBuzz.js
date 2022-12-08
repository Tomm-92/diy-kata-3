const fizzBuzz = (number) => {
  const isDivisableBy3 = number % 3 === 0;
  const isDivisableBy5 = number % 5 === 0;

  if (isDivisableBy3 && !isDivisableBy5) {
    return "Fizz";
  }
  if (isDivisableBy5 && !isDivisableBy3) {
    return "Buzz";
  }
  if (isDivisableBy3 && isDivisableBy5) {
    return "FizzBuzz";
  }
  return number;
};

module.exports = fizzBuzz;
