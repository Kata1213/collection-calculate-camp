'use strict';

function average_uneven(collection) {

  //在这里写入代码
  return get_avg(collection.filter(function (x) {
    return x %2 !==0;
  }))
}

function get_avg(collection){
 var sum = collection.reduce(function (pre,cur) {
    return pre+cur;
  })
  return sum/collection.length;
}

module.exports = average_uneven;
