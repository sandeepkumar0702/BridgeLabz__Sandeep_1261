// Calculate 10!

function fact(n){
    if(n==0){
        return 1n;
    }
    let ans=0n
    return ans=BigInt(n)*fact(n-1);
}
module.exports={fact};
// let ans=fact(5);
// console.log(ans);

