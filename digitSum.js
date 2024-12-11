function sumOfDigit(n){
    let ans=0;
    while(n>0){
        let d=n%10;
        ans=ans+d;
        n=parseInt(n/10);
    }
    return ans;
}
let sum=sumOfDigit(12345);
console.log(sum);