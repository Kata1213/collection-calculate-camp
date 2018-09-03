'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var re =[];
  if(number_a <= number_b){
    re = loop(number_a,number_b)
  }else{
    re =loop (number_b,number_a).reverse();
  }
  return re;
}

function loop (n1,n2){
  let result =new Array();
  for (let i=n1;i<= n2;i ++){
    if(i %2 ===0){
      result.push(i);
    }
  }
  console.log(result);
  return result;
}

module.exports = get_integer_interval_2;
