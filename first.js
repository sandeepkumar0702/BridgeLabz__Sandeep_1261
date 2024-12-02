// "use strict";
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


// let a=p("Enter a number");


/*Read a single digit number and write the number in word using Case
function find(number) {
    let word;
    switch(number) {
        case 0:
            word = "Zero";
            break;
        case 1:
            word = "One";
            break;
        case 2:
            word = "Two";
            break;
        case 3:
            word = "Three";
            break;
        case 4:
            word = "Four";
            break;
        case 5:
            word = "Five";
            break;
        case 6:
            word = "Six";
            break;
        case 7:
            word = "Seven";
            break;
        case 8:
            word = "Eight";
            break;
        case 9:
            word = "Nine";
            break;
        default:
            word = "Invalid input! Please enter a single digit (0-9).";
    }

    return word;
}
let ans=find(parseInt(p("Eneter a number")));
console.log(ans);
*/

/*2222222222Read a Number and Display the week day (Sunday, Monday,…)
function find(number) {
    let day;

    switch (number) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid input! Please enter a number between 1 and 7.";
    }

    return day;
}
let ans=find(parseInt(p("Eneter a number")));
console.log(ans);
*/

/*3333Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…


function find(number) {
    let placeValue;

    switch (number) {
        case 1:
            placeValue = "Unit";
            break;
        case 2:
            placeValue = "Ten";
            break;
        case 3:
            placeValue = "Hundred";
            break;
        case 4:
            placeValue = "Thousand";
            break;
        case 5:
            placeValue = "Ten Thousand";
            break;
        case 6:
            placeValue = "Hundred Thousand";
            break;
        case 7:
            placeValue = "Million";
            break;
        default:
            placeValue = "Invalid input! Please enter 1, 10, 100, 1000, etc.";
    }

    return placeValue;
}

// Example usage:
let len = p("Enter a number").length;
let ans = find(len);
console.log(ans);
*/


/*4444444Write a program that takes User Inputs and does Unit Conversion of
different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet*/

function feetToInch(num){
    return num*12;
}
function inchToFeet(num){
    return num/12;
}
function feetToMeter(num){
    return num*0.3048;
}
function meterToFeet(num){
    return num/0.3048;
}
function find(num,value){
    let ans;
    switch(num){
        case 1:
            ans=feetToInch(value);
            break;
        case 2:
            ans=inchToFeet(value);
            break;
        case 3:
            ans=feetToMeter(value);
            break;
        case 4:
            ans=meterToFeet(value);
            break;
        default :
            ans="Invalid input";
    }
    // console.log(ans);
    return ans;
}
let option=p("Select option \n"+
    "1 : feet to inch"+
    "2 : inch to feet"+
    "3 : feet to meter"+
    "4 : meter to feet"
);
let value=p("ENete the value");
let ans=find(parseInt(option),parseInt(value));
console.log(ans.toFixed(2));









/*111Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n.
let n=parseInt(p("ENter the number"));
for(let i=0;i<=n;i++){
    console.log(`2^${i}=${Math.pow(2,i)}`);
}
    */



/*22222222222Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form

let n=parseInt(p("ENter the number"));
let sum=0;
for(let i=1;i<=n;i++){
    sum+=1/i;
}
console.log(sum);
*/


/*333333333333Write a program that takes a input and determines if the number is a prime
function  isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return "Not prime";
        }
    }
    return "Prime Number";
}
let n=parseInt(p("ENter the number"));
console.log(isPrime(n));


*/



/*444444444Extend the program to take a range of number as input and output the Prime
Numbers in that range.
function  isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
let start=parseInt(p("ENter start"));
let end=parseInt(p("ENter end "));
for(let i=start;i<=end;i++){
    if(isPrime(i)){
        console.log(i+" ");
    }
}

*/


/*555555555555Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

function find(num){
    if(num===0){
        return 0;
    }
    let ans=1;
    for(let i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
}

let n=parseInt(p("ENter Number"));
let ans=find(n);
console.log(ans);*/

/*6666666666Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N*/

function find(num){
    let ans=[];
    for(let i=2;i<=Math.sqrt(num);i++){
        while(num%i===0){
            ans.push(i);
            num/=i;
        }
    }
    if(num>2){
        ans.push(num);
    }
    return ans;
}
let n=parseInt(p("ENter Number"));
let ans4=find(n);
console.log(ans4);


/*Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum */

/* 1
let num1=p("Enter number1");
let num2=p("Enter number2");
let num3=p("Enter number3");
if(num1>num2){
    if(num1>num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2>num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
*/
/*22Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
let day=p("Enter the day");
let month=p("Enter the month");
if(month=="March" || month=="April" || month=="May" || month=="june"){
    if(month=="March"){
        if(day>20 && day<=31){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
    else if(month=='April'){
        if(day>=1 && day<=30){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
    else if(month=='May'){
        if(day>=1 && day<=31){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
    else{
        if(day>=1 && day<20){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
}
else{
    console.log("false");
}
*/


/*33333333Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.*/
// let year=p("Enter year");
// if(year<1000 && year>=9999){
//     console.log("Invalid year");
// }
// else {
//     if(year%4==0){
//         if(year%100==0){
//             if(year%400==0){
//                 console.log("leap year");
//             }
//             else{
//                 console.log("Not a leap year");
//             }
//         }
//         else{
//             console.log("leap year");
//         }
//     }
//     else{
//         console.log("Not a leap year");
//     }
// }


/*444Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly*/

// let num=Math.random()*10+1;
// if(num<=5){
//     console.log("Heads");
// }
// else{
//     console.log("Tails");
// }



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





/*1111111111111Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..
let n=parseInt(p("ENter Number"));
let i=0;
while(i<=n){
    let curr=Math.pow(2,i);
    if(curr>256){
        break;
    }
    console.log(curr+" ");
    i++;
}
*/


/* 2222222Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..

let number=Math.floor(Math.random()*100)+1;
while(true){
    let ans=parseInt(p("Enter number"));
    if(ans===number){
        console.log("you guessed the  number");
        break;
    }
    else if(ans<number){
        console.log("number is graeter than the current number");
    }
    else{
        console.log("number is less than the current number");
    }
}*/


/*Extend the Flip Coin problem till either Heads or Tails wins 11 times
let h=0,t=0;
while(h<11 || t<11){
    let curr=Math.random()<0.5 ? "Head":"Tail";
    if(curr=="Head"){
        h++;
    }
    else{
        t++;
    }
}
if(h==11){
    console.log("Heads Wins");
}
else{
    console.log("Tails Wins");
}
    */


/*444444Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made. 
let balance=100;
let goal=200;
let wins=0;
let currbet=1;
let bet=0;
while(balance>0 && balance<goal){
    let curr=Math.random()<0.5 ? "Win":"Lose";
    if(curr==="Win"){
        balance+=currbet;
        wins++;
    }
    else{
        balance-=currbet;
    }
}
if(balance==goal){
    console.log(`you reach the goal with wins=  ${wins}`);
}
else{
    console.log("You didn't reach the goal");
}
    */
   