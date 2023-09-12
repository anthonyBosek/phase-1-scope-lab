// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "anthony";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "not anthony";
}
// changeLeastFavoriteCustomer();
// TypeError: Assignment to constant variable.
