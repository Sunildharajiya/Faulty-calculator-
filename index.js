const pro = require('prompt-sync')();

let ran = Math.random();
console.log(ran);
let a = pro('enter value of a:');
a= parseInt(a);
let c = pro("enter a operation");
let b = pro('enter value of b:');
b = parseInt(b);
if (ran > 0 && ran <1000 ){
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