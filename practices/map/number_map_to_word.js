'use strict';
var number_map_to_word = function(collection){
  // return ['a','b','c','d','e'];
  // String.fromCharCode(96 + number_a)

  // var result = [];
  // for(var x of collection){
  //   result.push(String.fromCharCode(96 + x));
  // }
  // return result;

  //用map 试试？
  return collection.map(function (x) {
    return String.fromCharCode(96 + x);
  })

};

module.exports = number_map_to_word;
