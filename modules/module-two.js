function toDollarString(number){
  number = number.toString();
  if(number.length>=4){
    var lastThree = number.slice(-3);
    var firstStuff = number.slice(0, (number.length-3));
    number = '$' + firstStuff + ',' + lastThree;
  }

  return number;
}

module.exports = {
  toDollarString: toDollarString,
}
