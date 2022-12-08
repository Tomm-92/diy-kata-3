const numberToReversedDigits = (number) => {
  const reverse = String(number).split("").reverse();
  return reverse.map(rev => Number(rev)); 

};

//const numberToReversedDigits = (number) => {
//    return String(number).split("").reverse().map(Number);
// };


module.exports = numberToReversedDigits;
