function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var bb = collection_b[0];
  return find(collection_a, bb);
}



  function find(collection_a,collection_b) {
    return collection_a.filter(function (x) {
      return collection_b.indexOf(x) > -1;
    })
  }


module.exports = collect_same_elements;
