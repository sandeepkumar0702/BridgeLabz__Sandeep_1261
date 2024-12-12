// let str = 'let count the words';
// let count = 0;
// let flag = false
// function countWords(str){
//     for(let i=0; i<str.length; i++){
//         if(str[i]!==' ' && str[i]!=='\n'){
//             if(!flag){
//                 flag=true;
//                 count++;
//             }
//         }
//         else{
//             flag = false;
//         }
//     }
//     return count;
// }
// console.log(countWords(str));




let str = 'let count the words';
function countWords(str){
    let ans=str.split(" ").length;
    return ans;
}
let count=countWords(str);
console.log(count);