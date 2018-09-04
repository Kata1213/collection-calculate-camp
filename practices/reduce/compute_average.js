'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum = collection.reduce(function (x,y) {
    return x+y;
  })

  return sum/collection.length;
}

module.exports = compute_average;





//课上练习，错误答案⤵ ，
// function mainn(template , obj){
//   return template(obj);
// }
// var obj = {
//   firstName:"CHENG",
//   lastName:"Li"
// }
//
// function template(){
//   var result=[];
//   result.push(" I am ");
//   result.push(obj.firstName);
//   result.push (" , ");
//   result.push(obj.lastName);
//   return result;
// }
//
// console.log(mainn(template,obj));






//正确答案~~！！！！
// var s ="I am ${firstName} , ${lastName}";
// var object= {
//   firstName:"Chenge",
//     lastName:"Li"
// };
//
// function repalce(strings ,object) {
//   console.log(Object.keys(object).reduce(reducer,strings));
// }
//
// const reducer=(s1,s2)=>s1.replace('${'+s2+'}',object[s2]);
//
// repalce(s,object);

