function solve(data, criteria) {
    let counter = 0;

    let employees = JSON.parse(data);
    if (criteria !== 'all') {
        let [propertyName, value] = criteria.split('-');
        employees = employees.filter(employee => employee[propertyName] == value);
    }

    console.log(employees
        .map(employee => `${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        .join('\n'));
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);