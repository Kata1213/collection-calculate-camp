'use strict';
function one_add_next_multiply_three(collection){
  // return [12,24,36,48,60,72,84,96,108,120];

  let result = collection.map(function (item,index,arr) {
    if(index != arr.length-1){
      return (item+arr[index+1])*3;
    }
  });
  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
