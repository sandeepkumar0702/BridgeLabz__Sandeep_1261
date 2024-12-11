// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
let arr1=[
    1,2,3,4,347, 349, 353, 359, 367, 373, 379, 383,
    389, 397, 401, 409, 419, 421, 431, 433,
    439, 443, 449, 457, 461, 463, 467, 479,
    487, 491, 499, 503, 509, 521, 523, 541,
    547, 557, 563, 569, 571, 577, 587, 593,
    599, 601, 607, 613, 617, 619, 631, 641,
    643, 647
];
let arr2=[1,2,3,4,5,6];
function union1(arr1,arr2){
    let ans=[...arr2];
    for(let val of arr1){
        let index=ans.indexOf(val);
        // console.log(index);
        if(index==-1){
            ans.push(val);
        }
    }
    return ans;
}
/// using array
// let ans=union1(arr1,arr2);
// console.log(ans);

//using set
function union2(arr1,arr2){
    let set=new Set([...arr1,...arr2]);
    let ans=[...set];
    console.log(typeof(ans));
    return ans;
}
let ans=union2(arr1,arr2);
console.log(ans);

