function count_same_elements(collection) {
  //在这里写入代码
  var obj = [];
  for (let i = 0; i < collection.length; i++) {
    if(obj[collection[i]] == undefined){
      obj[collection[i]]=1;
    }else{
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

module.exports = count_same_elements;

