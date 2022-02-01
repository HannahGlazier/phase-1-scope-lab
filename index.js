// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'fred';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'jim';
}