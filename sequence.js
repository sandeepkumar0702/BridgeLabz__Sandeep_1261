const ps=require('prompt-sync');
const p=ps();

/*Sequeuenece practice problem*/
//1
// console.log(Math.floor(Math.random()*10));  

//2
// console.log(Math.floor(Math.random()*6)+1);  

//3
/*
let a=Math.floor(Math.random()*6)+1;  
let b=Math.floor(Math.random()*6)+1;  
console.log(a+b);  
*/

//4
// function gen(){
//     return Math.floor(Math.random()*90);+10;  /// 99 -10 +1
// }
// let sum=0;
// for(let i=0;i<5;i++){
//     sum+=gen();
// }
// console.log(sum/5);


///5
function toFoot(inch){
    return inch/12;
}
function toInch(foot){
    return foot*12;
}
function toMeter(foot){
    return foot*0.3048;
}
let lenOfRectangle=p("Enter a length");
let widthOfRectangle=p("Enter a width");
let area=toMeter(lenOfRectangle*widthOfRectangle);
console.log(25*area);

