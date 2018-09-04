'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if(Array.isArray(collection[i])){
      var arr = collection[i];
      for (let j = 0; j < arr.length; j++) {
        result.push(arr[j]);
      }
    }else{
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = double_to_one;
