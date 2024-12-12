// Create a function that returns an array with words inside a text.
let str = "hy i am sandy";
function   word(str){
    let ans=str.split(" ");
    return ans;


    // let array = [];
    // let word = '';
    // for(let i=0; i<str.length; i++){
    //     if(str[i]!==' ' && str[i]!=='\n'){
    //         word +=str[i];
    //     }
    //     else{
    //         if(word){
    //             array.push(word);
    //             word='';
    //         }
    //     }
    // }
    // if(word){
    //     array.push(word);
    // }
    // return array;
}
let ans=word(str);
console.log(ans);