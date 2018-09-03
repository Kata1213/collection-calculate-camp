'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var result =collection.filter(function (x) {
    // console.log(x%2===0);
    return x % 2 ===0;
  });
  // console.log(result);
return result;
}

module.exports = collect_all_even;
