var random = require('./modules/module-one.js');

var stringMoney= require('./modules/module-two.js');

var moduleThree = require('./modules/module-three.js');

// console.log(random.randomNumber(100, 1000000));
//
// console.log(stringMoney.toDollarString(10));

var message = moduleThree.accountBalance() + moduleThree.moduleOneAndTwo;

console.log(message);

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(message);
  res.end();
}).listen(5000);
