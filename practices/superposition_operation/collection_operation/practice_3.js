'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(function (x) {
    return x%2!==0;
  }).map(function (x) {
    return x*3+5;
  }).reduce(function (pre,cur) {
   console.log(pre+cur);
    return pre+cur;
  })
}

module.exports = hybrid_operation_to_uneven;

