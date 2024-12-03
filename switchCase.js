const ps=require('prompt-sync');
const p=ps();

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

