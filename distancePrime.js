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
    let ans=[];
    while(cnt!=0){
        if(isPrime(i)){
            ans.push(i);
            cnt--;
        }
        i++;
    }
    let dist=0;
    for(let i=0;i<ans.length;i+=2){
        dist+=ans[i+1]-ans[i];
    }
    return dist;
}

let distance=prime();
console.log(distance);
