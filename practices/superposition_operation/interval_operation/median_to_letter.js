'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var len = collection.length;
  let median;

  if(len % 2 == 0 ){
    median = (collection[len/2-1]+collection[len/2])/2;
    median = Math.ceil(median);
  }else{
    let mediumIndex = Math.floor(len/2);
    median = collection[mediumIndex];
  }

  return numToCharacter(median);
}

function numToCharacter(num) {
  var ele;
  if (num <= 26) {
    ele = String.fromCharCode(96 + num);
  } else {
    let num1 = Math.floor((num - 1) / 26),
      num2 = num - num1 * 26;
    ele = String.fromCharCode(96 + num1) + String.fromCharCode(96 + num2);
  }
  return ele;
}

module.exports = median_to_letter;
