let arr=[1,2,3,45,6,7,7,54,32,123];
let ans=arr.reduce((acc,ele)=>{
    return acc+ele;
})
console.log(ans);