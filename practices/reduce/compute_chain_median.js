'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split("->");
  arr = arr.map(function (item) {
    return parseInt(item,10)
  });
  var len = arr.length;
  if(len % 2 == 0 ){
    return (arr[len/2-1]+arr[len/2])/2;
  }else{
    let mediumIndex = Math.floor(len/2);
    return arr[mediumIndex];
  }
}

module.exports = compute_chain_median;
