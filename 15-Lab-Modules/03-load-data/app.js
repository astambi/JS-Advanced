let dataFunctions = require('./data-functions');
let sort = dataFunctions.sort;
let filter = dataFunctions.filter;

// testing in Judge
result.sort = sort;
result.filter = filter;

// let sortedData = sort('shipTo');
// console.log(sortedData);
// let filteredData = filter('status', 'shipped');
// console.log(filteredData);