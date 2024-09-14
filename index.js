const pro = require('prompt-sync')();

let randum = Math.random();
let ran = randum*1000;
console.log(ran);
let a = pro('enter value of a:');
a= parseInt(a);
let c = pro("enter a operation");
let b = pro('enter value of b:');
b = parseInt(b);
if (a < 100 && ran > 0){
if (c == "+"){
  console.log((a), '+' ,(b) ,"=", (a+b))
}else if (c == "-"){
  console.log((a), '-' ,(b) ,"=", (a-b))
}
  else if (c == "*"){
  console.log((a), '*' ,(b) ,"=", (a*b))
  }
    else if (c == "/"){
      console.log((a), '/' ,(b) ,"=", (a/b))
    }
else{
  console.log("sorry, something is wrong ")
}
}else{
  if (c == "+"){
  console.log((a), '+' ,(b) ,"=", (a-b))
}else if (c == "-"){
  console.log((a), '-' ,(b) ,"=", (a*b))
}
  else if (c == "*"){
  console.log((a), '*' ,(b) ,"=", (a/b))
  }
    else if (c == "/"){
      console.log((a), '+' ,(b) ,"=", (a-b))
    }
else{
  console.log("sorry, something is wrong ")
}
}