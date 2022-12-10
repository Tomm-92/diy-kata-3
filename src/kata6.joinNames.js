const joinNames = (namesObj) => {
let names = namesObj.map((name) => name.name.split(" "));
let names1 = String(names);
let names2 = names1.split(",").join(", ");
  return names2.replace(/,(?=[^,]+$)/, " &");
};

/* const joinNames = (namesObj) => {
   return namesObj.map(object => object.name).join(", ").replace(/,(?=[^,]+$)/, " &");
}; */

module.exports = joinNames;
