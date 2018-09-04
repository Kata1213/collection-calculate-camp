'use strict';
var even_asc_odd_desc = function(collection){
  var even=collection.filter(function (x) {
    return x %2 ===1;
  }).sort(function (a,b) {
    return a<b;
  })
  var odd=collection.filter(function (x) {
    return x %2 ===0;
  }).sort(function (a,b) {
    return a>b;
  })

  return odd.concat(even);
};
module.exports = even_asc_odd_desc;
