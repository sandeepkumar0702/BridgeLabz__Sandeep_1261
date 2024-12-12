// Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
function prime(){
    let i=1;
    let cnt=100;
    let sum=0;
    let ans=[];
    while(cnt!=0){
        if(isPrime(i)){
            ans.push(i);
            sum+=i;
            cnt--;
        }
        i++;
    }
    return {sum,ans};
}

let finalans=prime();
let finalSum=finalans.sum;
let primeArray=finalans.ans;
console.log(`sum =  ${finalSum}`);
console.log(`Prime numbers are =  ${primeArray}`);
