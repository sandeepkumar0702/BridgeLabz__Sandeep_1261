// Create a function that will convert a string in an array containing the ASCII codes of each character
let string="hi my name is sandeep";
function asciCode(str){
    let ans=[];
    for(let i=0;i<str.length;i++){
        ans.push(str.charCodeAt(i));
    }
    return ans;
}
let ans=asciCode(string);
console.log(ans);
