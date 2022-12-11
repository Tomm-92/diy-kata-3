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

/* CODE EXPLANATIONS 

Looking for multiples of 3 and 5 therefore use the modulo operator which returns the reaminder
if the number is multiple then the remainder will be 0

Divisible by 3 and not divisble by 5 returns fizz and so on */