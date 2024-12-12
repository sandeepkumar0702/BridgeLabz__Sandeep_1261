// Create a function that converts a string to an array of characters
let str = "hy i am Sandeep";
// way1 
// function get(str){
//     return str.split('');
// }
// console.log(get(str));
// let arr = [...str];
// console.log(arr);


//way2
function get(str){
    let array = [];
    for(let i=0; i<str.length; i++){
        if(str[i]==' '){
            continue;
        }
        array.push(str[i]);
    }
    return array;
}
console.log (get(str));