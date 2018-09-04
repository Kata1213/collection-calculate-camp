'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = collection_a.filter(function (x) {
    // collection_b.filter(function (y) {
    //    if(x % y ===0){
    //      console.log(x + "   " + y);
    //      return true;
    //    }
    //   return false;
    // })

    for (let i = 0; i < collection_b.length; i++) {
      if (x % collection_b[i] === 0) {
        console.log(x + "   " + collection_b[i]);
        return true;
      }

    }
    return false;
  })

  return result;
}

module.exports = choose_divisible_integer;
