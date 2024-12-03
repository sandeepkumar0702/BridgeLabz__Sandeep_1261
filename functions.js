let ps=require('prompt-sync');
let p=ps();
let choice=p("Chhose the conversion \n"+
    "1 : fahrenheit to celcius \n"+
    "2 : celcius to fahrenheit\n"
);
if(isNaN(choice)){
    console.log("Invalid input");
}

function fToC(){
    let value=p("Enter value in fahrenheit");
    if(value<32 || value>212){
        console.log("Invalid Input");
    }
    else{
        let celcius=(value-32)*5/9;
        console.log(celcius.toFixed(3));
    }
}

function cToF(){
    let value=p("Enter value in celcius");
    if(value<0 || value>100){
        console.log("Invalid Input");
    }
    else{
        let fah=value*(9/5)+32;
        console.log(fah.toFixed(3));
    }
}

switch(parseInt(choice)){
    case 1:fToC();
    break;
    case 2:cToF();
    break;
}
console.log(choice);
