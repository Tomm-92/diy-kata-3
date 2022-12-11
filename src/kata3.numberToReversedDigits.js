const numberToReversedDigits = (number) => {
  const reverse = String(number).split("").reverse();
  return reverse.map(rev => Number(rev)); 

};

/* const numberToReversedDigits = (number) => {
return String(number).split("").reverse().map(Number);
}; */

/* CODE EXPLANATION 
Starting with a string of numbers and want to return an array of those same numbers but reversed 
Map function is being used a this creates a new array
const reverse is setting up the numbers ready to be mapped in to the array - this splits the numbers
and then gives a list of each number e.g. "1", "3", "5" as string values
They can then be mapped in to the array
 */

module.exports = numberToReversedDigits;
