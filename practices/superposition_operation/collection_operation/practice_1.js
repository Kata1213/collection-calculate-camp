'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.map(function (x) {
          return  x*3+2
  }).reduce(function (pre,cur) {
    return pre+cur;
  })
}

module.exports = hybrid_operation;

