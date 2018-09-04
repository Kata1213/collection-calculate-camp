'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result =collection_a.filter(function (x) {
    return collection_b.indexOf(x) ===-1;
  })
  return result;
}

module.exports = choose_no_common_elements;
