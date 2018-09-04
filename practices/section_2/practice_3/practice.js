function count_same_elements(collection) {
  //在这里写入代码
  let obj = [];
  collection.map(function (item) {
    if(item.length > 1){
      let letter_name = item.substring(0,1);
      let count_number;
      if(item.indexOf("[")!=-1){
        count_number = parseInt(item.substring(2,item.length-1));
      }else{
        count_number = parseInt(item.substring(2));
      }

      if(obj[letter_name] == undefined){
        obj[letter_name] = count_number;
      }else{
        obj[letter_name] += count_number;
      }

    }else if(obj[item] == undefined){
      obj[item] = 1;
    }else{
      obj[item] ++;
    }
  });


  let result = [];
  for(var key in obj){
    var temp = {name:key,summary:obj[key]}
    result.push(temp);
  }
  return result;
}




module.exports = count_same_elements;
