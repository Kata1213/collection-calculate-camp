'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort(function (a,b) {
    return a>b;
  })

  let arr = [];
  let len = Math.floor(collection.length/3)*3;
  for (let i = 0; i < len; i+=3) {
    var temp = [];
    temp.push(collection[i]);
    temp.push(collection[i+1]);
    temp.push(collection[i+2]);

    let firstEle = temp.shift();//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
    temp.push(firstEle);
    arr = arr.concat(temp);
  }

  for(let i = len ;i<collection.length;i++){
    arr.push(collection[i]);
  }
  return arr;
}
module.exports = rank_by_two_large_one_small;
