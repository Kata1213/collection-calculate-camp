'use strict';
var single_element = function(collection){
  let result = collection.filter(function (item,index) {
    return index % 2 == 1;
  });

  let obj =[];
  for (let i = 0; i < result.length; i++) {
    if(obj[result[i]] == undefined){
      obj[result[i]] = 1;
    }else{
      obj[result[i]]++;
    }
  }

  let res = [];
  for(let item in obj){
    if(obj[item] == 1){
      res.push(parseInt(item));
    }
  }
  return res;
};
module.exports = single_element;
