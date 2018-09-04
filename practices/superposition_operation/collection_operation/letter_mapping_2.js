'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  return String.fromCharCode(96+get_avg(collection));
}

function get_avg(collection){
  let sum = collection.reduce(function (prev, cur) {
    return prev + cur;
  });
  let avg = Math.ceil(sum / collection.length);
  return avg;
}

module.exports = average_to_letter;

