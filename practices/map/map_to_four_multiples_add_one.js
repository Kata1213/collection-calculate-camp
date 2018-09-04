'use strict';
var map_to_four_multiples_add_one = function(collection){
  // var result = [];
  // for(var x of collection){
  //   result.push(x*4+1);
  // }
  // return result;


  //用map 试试？
  return collection.map(function (x) {
    return x*4+1;
  })



};

module.exports = map_to_four_multiples_add_one;
