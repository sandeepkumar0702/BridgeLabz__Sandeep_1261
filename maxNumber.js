// Find the maximum number in an array of numbers
let arr=[1,2,3,45,-6,7,7,54,32,-124];
let ans=arr.reduce((acc,ele)=>{
    return acc>ele? acc:ele;
},arr[0]);
console.log(ans);