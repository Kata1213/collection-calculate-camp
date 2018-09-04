'use strict';
var calculate_average = function(collection){
return get_avg(collection.filter(function (x) {
  return x %2 ===0;
}))
};

function get_avg(collection){
  var sum = collection.reduce(function (pre,cur) {
    return pre+cur;
  })
  return sum/collection.length;
}
module.exports = calculate_average;
