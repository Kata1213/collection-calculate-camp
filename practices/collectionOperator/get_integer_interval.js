'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = new Array();
  if (number_a < number_b) {
    result = get_reduce_array(number_a, number_b);
  } else if (number_a > number_b) {
    result = get_reduce_array(number_b, number_a).reverse();
  } else {
    result.push(number_b);
  }
  return result;
}

function get_reduce_array(n1, n2) {
  let res = [];
  for (let i = n1; i <= n2; i++) {
    res.push(i);
    console.log(res + " yoyo ")
  }
  console.log(res + "lalalalaalal")
  return res;
}

module.exports = get_integer_interval;

