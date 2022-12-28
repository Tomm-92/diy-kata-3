const booleanToWord = (boolean) => {
  return boolean === true ? 'Yes' : 'No';
};

module.exports = booleanToWord;

/* OLD CODE BEFORE REFACTORTING TO TERNARY OP /

if (boolean === true) {
  return "Yes";
}
if (boolean === false) {
  return "No";
}
*/
