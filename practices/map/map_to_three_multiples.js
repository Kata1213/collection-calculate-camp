'use strict';
var map_to_three_multiples = function(collections){
  // var result = [];
  // for(var x of collections){
  //   result.push(x*3);
  // }
  // return result;

  //用map 试试？
  return collections.map(function (x) {
    return x*3;
  })
};

module.exports = map_to_three_multiples;
