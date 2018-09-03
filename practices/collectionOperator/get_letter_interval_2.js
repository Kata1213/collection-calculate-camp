'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  let result = [];
  if (number_a === number_b) {
    let ele = numToCharacter(number_a);
    result.push(ele);
    return result;
  }

  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      result.push(numToCharacter(i));
    }

  } else {
    for (let i = number_a; i >= number_b; i--) {
      result.push(numToCharacter(i));
    }
  }
  return result;
}

function numToCharacter(num) {

  if (num <= 26) {
    let res = String.fromCharCode(96 + num);
    return res;
  }

  let num1 = Math.floor((num - 1) / 26),
      num2 = num - num1 * 26;
  let res = String.fromCharCode(96 + num1) + String.fromCharCode(96 + num2);
  return res;
}

module.exports = get_letter_interval_2;

