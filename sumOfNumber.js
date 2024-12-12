let ps=require('prompt-sync');
let p=ps();
let num1=BigInt(p("enter a number  "));
let num2=BigInt(p("enter a number  "));
console.log(typeof(num1+num2));// 2^54 - 1
let ans=num1+num2;
console.log(ans.toString());// 2^54 - 1



