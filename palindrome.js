const ps=require('prompt-sync');
const p=ps();
function palindrome(number1,number2){
    if(number1.length!=number2.length){
        console.log("Not Palindrome number");
    }
    else{
        let b=true;
        for(let i=0;i<number1.length;i++){
            if(number1[i]!=number2[i]){
                b=false;
                break;
            }
        }
        if(b){
            console.log("Number are palindome");
        }
        else{
            console.log("Number are  not palindome");
        }
    }
}
let number1=p("Enter number1: ");
let number2=p("Enter number2: ");
palindrome(number1,number2);

