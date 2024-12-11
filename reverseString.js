let string="hlo my name is sandy";
let reverseString="";
for(let i=string.length-1;i>=0;i--){
    reverseString+=string[i];
}
console.log(reverseString);


// ibuilt metthod
let ans=string.split().reverse().join(" ");
console.log(ans);