let b=true;
let number=Math.floor(Math.random()*100)+1;
let cnt=0;
while(b){
    let promptNumber=parseInt(prompt("Enter a number"));
    if(promptNumber==number){
        alert(`You won the game in ${cnt} moves`);
        b=false;
    }
    else if(promptNumber<number){
        alert("Entered  number is is lesser than original number");
    }
    else{
        alert("Entered  number is is grater than original number");
    }
    cnt++;
}