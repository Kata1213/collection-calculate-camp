'use strict';

function compute_median(collection) {
  //在这里写入代码
  if(collection.length % 2 == 0 ){
    return (collection[collection.length/2-1]+collection[collection.length/2])/2;
  }else{
    let mediumIndex = Math.floor(collection.length/2);
    return collection[mediumIndex];
  }
}

module.exports = compute_median;


