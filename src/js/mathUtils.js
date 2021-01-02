
function math(num1,num2){
  return num1 + num2 ;
}

function mult(num1,num2){
  return num1 * num2 ;
}
let a = 10;
let b = 100;
let c = (a,b)=>{
  return a+b*a-b ;
}

//commonjs规范
module.exports = {
  math,
  mult,
  c
}
