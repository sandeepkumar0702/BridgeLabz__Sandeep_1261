const ps=require('prompt-sync');
const p=ps();
/*1111111111111Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..*/
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
   