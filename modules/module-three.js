var moduleOne = require('./module-one.js');
var moduleTwo = require('./module-two.js');

var randomNumAsString = moduleTwo.toDollarString(moduleOne.randomNumber(100, 1000000));
function accountBalance(){
  return 'Account Balance: \n';
}

module.exports = {
  moduleOneAndTwo: randomNumAsString,
  accountBalance: accountBalance,
}
