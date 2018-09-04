'use strict';
var calculate_median = function(collection){
  collection = collection.filter(function (item,index) {
    return index % 2 == 1;
  });

  let median;
  if(collection.length % 2 == 0 ){
    median = (collection[collection.length/2-1]+collection[collection.length/2])/2;
  }else{
    let mediumIndex = Math.floor(collection.length/2);
    median = collection[mediumIndex];
  }
  return median;
};
module.exports = calculate_median;
