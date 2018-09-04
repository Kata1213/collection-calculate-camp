'use strict';
var even_group_calculate_average = function(collection){
  var evenEle = collection.filter(function (item,index) {
    return index % 2 == 1 && item % 2 ==0;
  });

  var one_number = evenEle.filter(function (item) {
    return item.toString(10).length == 1;
  });
  var two_number = evenEle.filter(function (item) {
    return item.toString(10).length == 2;
  });
  var three_number = evenEle.filter(function (item) {
    return item.toString(10).length == 3;
  });
  let result = [];

if(one_number.length!==0&two_number.length !==0 && three_number.length !== 0){
  console.log(one_number,two_number,three_number);
  result.push(get_avg(one_number));
  result.push(get_avg(two_number));
  result.push(get_avg(three_number));
  console.log(result + " firsr!");
  return result;
}


  if(one_number.length === 0 && two_number.length ===0 && three_number.length === 0){
    result.push(0);
    return result;
  }

  if(one_number.length === 0 && two_number.length === 0 && three_number.length !==0){
    result.push(get_avg(three_number));
    return result;
  }

};

function get_avg(collection) {
  var sum =collection.reduce(function (pre,cur) {
    return pre+cur;
  })
  return sum/collection.length;
}

// var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
// var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
// var collection_c = [344, 256, 55, 777, 322, 180];
//
// console.log("index=" + collection_c.indexOf(256));
//
// console.log(even_group_calculate_average(collection_a));
// console.log(even_group_calculate_average(collection_b));
// console.log(even_group_calculate_average(collection_c));
module.exports = even_group_calculate_average;
