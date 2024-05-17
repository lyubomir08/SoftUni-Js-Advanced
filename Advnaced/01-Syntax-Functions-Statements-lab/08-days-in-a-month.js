function daysInAMonth(month, year) {
    let date = new Date(year, month - 1, 1);
    
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    
    console.log(date.getDate());
}

daysInAMonth(1, 2012);
// daysInAMonth(2, 2021);