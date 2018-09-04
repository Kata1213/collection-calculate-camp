'use strict';
var number_map_to_word_over_26 = function(collection){
  // return ['a','m','aa','ad','y','aa']

  var result = [];
  for(var num of collection){

    if (num <= 26) {
       result.push( String.fromCharCode(96 + num));
    }else {
      let num1 = Math.floor((num - 1) / 26),
        num2 = num - num1 * 26;
      result.push(String.fromCharCode(96 + num1) + String.fromCharCode(96 + num2));
    }
  }
  return result;

};

module.exports = number_map_to_word_over_26;
