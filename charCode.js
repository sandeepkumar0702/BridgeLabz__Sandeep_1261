// Create a function that will convert a string in an array containing the ASCII codes of each character
// let arr=[121,34,5,6,78,98,76,54,100];
let arr=[72,101,108,108,111,33];
function asciCode(arr){
    let ans="";
    for(let i=0;i<arr.length;i++){
        ans+=String.fromCharCode(arr[i]);
    }
    return ans;
}
let ans=asciCode(arr);
console.log(ans);
