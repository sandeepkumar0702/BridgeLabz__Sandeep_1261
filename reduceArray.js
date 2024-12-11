function reduceArray(arr){
    let ans=arr.filter((ele)=>{
        return ele>0;
    })
    return ans;
}
let arr=[1,2,3,45,-6,7,7,54,32,-124];
let ans=reduceArray(arr);
console.log(ans);