'use strict';

function amount_even(collection) {

  //在这里写入代码
  return collection.filter(function (x) {
    return x%2===0;
  }).reduce(function (pre,cur) {
    return pre+cur;
  })
}

module.exports = amount_even;
