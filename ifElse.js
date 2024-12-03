const ps=require('prompt-sync');
const p=ps();


// 111Read a single digit number and write the number in word
// let number=p("ENtere a number");
// if(number==0){
//     console.log("Zero");
// }
// else if(number==1){
//     console.log("One");
// }else if(number==2){
//     console.log("Two");
// }else if(number==3){
//     console.log("Three");
// }else if(number==4){
//     console.log("Four");
// }else if(number==5){
//     console.log("Five");
// }else if(number==6){
//     console.log("Six");
// }else if(number==7){
//     console.log("Seven");
// }else if(number==8){
//     console.log("Eight");
// }else if(number==9){
//     console.log("Nine");
// }else {
//     console.log("invalid Nuber");
// }



/*222222222
Read a Number and Display the week day (Sunday, Monday,…)
let number=p("ENtere a number");
if(number==0){
    console.log("Sunday");
}
else if(number==1){
    console.log("Monday");
}else if(number==2){
    console.log("Tuesday");
}else if(number==3){
    console.log("Thursday");
}else if(number==4){
    console.log("Friday");
}else if(number==5){
    console.log("Saturday");
}else {
    console.log("invalid Nuber");
}

*/



/*333 Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
let number=p("Enter a  number");
const len=number.toString().length;
if(len==1){
    console.log("Unit");
}
else if(len==2){
    console.log("Tens");
}
else if(len==3){
    console.log("Hundred");
}else if(len==4){
    console.log("thousand");
}else if(len==5){
    console.log("ten Thousand");
}else if(len==6){
    console.log("Lakh");
}
else if(len==7){
    console.log("Ten Lakh");
}*/



/*Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c 3. c + a / b
2. a % b + c 4. a * b + c*/


let a=parseInt(p("Entere a num"));
let b=parseInt(p("Entere a num"));
let c=parseInt(p("Entere a num"));
let op1=parseInt(a+(b*c));
let min=op1;
let max=op1
max=Math.max(max,op1);
let op2=c + a / b;
min=Math.min(min,op2);
max=Math.max(max,op2);
let op3=a % b + c;
min=Math.min(min,op3);
max=Math.max(max,op3);
let op4=a * b + c;
min=Math.min(min,op4);
max=Math.max(max,op4);
console.log(`max= ${max} and min=${min}`);




