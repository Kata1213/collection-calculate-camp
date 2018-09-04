function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var res=[];
  for(let i=0;i<collection_a.length;i++){
    var rr=find(collection_a[i].key,object_b.value);
    if(rr!== null){
      res.push(rr);
    }
  }
  // console.log("final +        "+ res);
  return res;
}

function find(a,collecion_b){
  var result=[];
  if(collecion_b.indexOf(a)>-1){
    result=a;
    // console.log("haha +   "+ result);
  }else{
    result=null;
  }
  return result;
}

module.exports = collect_same_elements;
