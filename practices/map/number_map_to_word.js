'use strict';
var number_map_to_word = function(collection){
  // return ['a','b','c','d','e'];
  // String.fromCharCode(96 + number_a)

  var result = [];
  for(var x of collection){
    result.push(String.fromCharCode(96 + x));
  }
  return result;


};

module.exports = number_map_to_word;
