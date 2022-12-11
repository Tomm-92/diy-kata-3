/* const getEmployerRole = (employeeName, employees) => {
  const search = employees.filter((y) => y.name === employeeName);
  return String(search.map((x) => x.role)); 
}; */

const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find((object) => object.name === employeeName);
  return employee.role;
};


// return roles = employees.map(x => x.role);

module.exports = getEmployerRole;

/* CODE EXPLANATION 

Starting with an array of objects and want to search this array using an employeeName parameter
to return their job role

Start by using a filter function (which creates a new array) to find the details of the employee
who's name matches the employeeName variable. The filter returns the following array:

[{"name": "Satti", "role": "Developer"}]

From this, then just want to get the role. Map is then used to create a new array which only includes the role
Cannot just use dot notation or sqaure brackets to access the role within the search as it is an object inside an array
The string function is used to return the text value - without this an array is given with the role inside - ["Developer"]

The alternative function uses the find to match the passed in employee name to the name within the object

This then returns an object - {"name": "Satti", "role": "Developer"}

Because its an object dot notation can then just be used to access the role 

*/