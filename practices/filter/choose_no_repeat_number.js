'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  //https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014351219769203e3fbe1ed611475db3d439393add8997000

  var result = collection.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
  return result;
}

module.exports = choose_no_repeat_number;
