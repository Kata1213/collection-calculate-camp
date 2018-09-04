'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var falg =true;
  collection_a.filter(function (x) {
    if (collection_b.indexOf(x) === -1){
      falg= false;
    }
  }
  )
  return falg;
}

module.exports = compare_collections;


