const joinNames = (namesObj) => {
let names = namesObj.map((x) => x.name);
return names.join(", ").replace(/,(?=[^,]+$)/, " &");
};

/* const joinNames = (namesObj) => {
   return namesObj.map(object => object.name).join(", ").replace(/,(?=[^,]+$)/, " &");
}; */

module.exports = joinNames;

/* CODE EXPLANATION 

OLD CODE BEFORE REFACTOR 

let names = namesObj.map((x) => x.name);
//.split(" "));
let names1 = String(names);
return names1.split(",").join(", ").replace(/,(?=[^,]+$)/, " &");

This code could be refactored as it was creating an array from the object then
casting the array in to a string only to split it back out in to an array again
to run the regex


Starting with an array of objects and want to concatenate the names together in to a string 
First function returns an array of the names - orgigit nally also had a split here which returned
each name within their own array but found this was unecessary
The String(names) function is required here as you cannot do a split on an array - must be a string 
The split join returns a string which now has a space after each comma 
The final return is the RegEx which replaces the final comma with an &


*/
