'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let union = Array.from(new Set(collection_a.concat(collection_b)));

  return union;
}

module.exports = get_union;

