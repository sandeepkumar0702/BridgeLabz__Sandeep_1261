// Create a function that will merge two arrays and return the result as a new array
function mergeArray1(arr,arr2){
    //using loop and array method
    let finalArray=[];
    for(let value of arr){
        finalArray.push(value);
    }
    for(let value of arr2){
        finalArray.push(value);
    }
    console.log(finalArray);
}
function mergeArray2(arr,arr2){
    let finalArray=[...arr2,...arr];
    console.log(finalArray);
}
let arr=[
    347, 349, 353, 359, 367, 373, 379, 383,
    389, 397, 401, 409, 419, 421, 431, 433,
    439, 443, 449, 457, 461, 463, 467, 479,
    487, 491, 499, 503, 509, 521, 523, 541,
    547, 557, 563, 569, 571, 577, 587, 593,
    599, 601, 607, 613, 617, 619, 631, 641,
    643, 647
];
let arr2=[1,2,3,4,5,6];
mergeArray1(arr,arr2);
mergeArray2(arr,arr2);


