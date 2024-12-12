// Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
function genrateNumber(n){
    let arr=[];
    while(arr.length!=n){
        let curr=Math.floor(Math.random()*(n))+1;
        if(arr.indexOf(curr)==-1){
            arr.push(curr);
        }
    }
    return arr;

    /// set bna ke array ma daal skte hai
}
let n=69;
let ans=genrateNumber(n);
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(ans[j]>ans[j+1]){
            let t=ans[j];
            ans[j]=ans[j+1];
            ans[j+1]=t;
        }
    }
}
console.log(ans);