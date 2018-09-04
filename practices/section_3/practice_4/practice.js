function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var countSame = count_same_elements(collection_a);
  var collection_b = object_b["value"];
  for(let i=0;i<countSame.length;i++){
    var k = countSame[i].key;
    if(collection_b.indexOf(k)!=-1){
      countSame[i].count -= Math.floor((countSame[i].count)/3);
    }
  }
  return countSame;

}

function count_same_elements(collection) {
  var obj = [];
  for (let i = 0; i < collection.length; i++) {
    if (obj[collection[i]] == undefined) {
      if (collection[i].indexOf("-") == -1) {
        obj[collection[i]] = 1;
      } else {
        obj[collection[i].split("-")[0]] = +collection[i].split("-")[1];
      }
    } else {
      obj[collection[i]]++;
    }
  }

  let result = [];
  for(var key in obj){
    var temp = {key:key,count:obj[key]}
    result.push(temp);
  }
  return result;
}

module.exports = create_updated_collection;
