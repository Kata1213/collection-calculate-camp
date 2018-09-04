function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码


    return find(collection_a,collection_b);



  function find(collection_a,collection_b) {
    console.log("hehehe~~~");
    return collection_a.filter(function (x) {
      return collection_b.indexOf(x) > -1;
    })
  }
}

module.exports = collect_same_elements;
