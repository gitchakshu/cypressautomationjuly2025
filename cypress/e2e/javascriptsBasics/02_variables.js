//var
//function scope
//redeclaration

function nameOfFunc()
{ 
//  console.log(a);
 let a = 100;
 console.log(a);
}

nameOfFunc();

let a = 1000;

console.log(a);
function nameOfFunc1()
{ 
//  console.log(a);
 let a = 10000;
 console.log(a);
}
nameOfFunc1();

function passWithParameter(a,b)
{
let sum = a+b;
console.log(sum);

}
passWithParameter(12,10);

// const 
const bool= true;
console.log(bool)
{
const bool=false; 
console.log(bool)
}

//let 
let m = 11;
console.log(m)
{
 let m = 101;
 console.log(m)
m = 102;
console.log(m)
}
console.log(m)

m = 205;
console.log (m);

//var
var username, password;
//