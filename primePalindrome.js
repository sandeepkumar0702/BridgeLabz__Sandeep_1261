const ps=require('prompt-sync');
const p=ps();
function findPalindrome(number){
    number=number.toString();
    let ans="";
    for(let i=number.length-1;i>=0;i--){
        ans+=number[i];
    }

    return parseInt(ans);
}
function isPrime(number){
    let b=true;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i==0){
            b=false;
            break;
        }
    }
    if(b){
        console.log("Number is prime");
    }
    else{
        console.log("Number is not  prime");

    }
}
let number=parseInt(p("Enter number: "));
isPrime(number);
let palindrome=findPalindrome(number);
console.log(palindrome);
isPrime(palindrome);
