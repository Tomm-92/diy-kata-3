const getEmployerRole = (employeeName, employees) => {
  const search = employees.filter((y) => y.name === employeeName);
  return String(search.map((x) => x.role));
};

// return roles = employees.map(x => x.role);

module.exports = getEmployerRole;
