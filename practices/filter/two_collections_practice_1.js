'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码

  // var collection =collection_a.concat(collection_b);
  // console.log(collection);

  // var result = collection.filter(function (element, index, self) {
  //   return self.indexOf(element) !== index;
  // });
  // return result;


  var result = collection_a.filter(function(x){
    // return collection_a.contains(x);  不能用这样的方法去判断是否包含！！
    return collection_b.indexOf(x) > -1;   //得用indexOf的方法去判断！！！！！！！！！！！
  })
  console.log(result);
  return result;

}

module.exports = choose_common_elements;
