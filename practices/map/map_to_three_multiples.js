'use strict';
var map_to_three_multiples = function(collections){
  var result = [];
  for(var x of collections){
    result.push(x*3);
  }
  return result;
};

module.exports = map_to_three_multiples;
