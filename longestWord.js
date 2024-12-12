// Create a function to return the longest word in a string
let string ="hlo my name is sandeep. ia m from delhi";
function longestWord(string){
    let ans;
    let cnt=0;
    let arr=string.split(" ");
    for(let val of arr){
        if(val.length>cnt){
            cnt=val.length;
            ans=val;
        }
    }
    return ans;
}
let ans=longestWord(string);
console.log(ans);
