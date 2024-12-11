//  Print the first 100 prime numbers
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
let cnt=0;
let prime=[];
let i=1;
while(true){
    if(isPrime(i)){
        prime.push(i);
        cnt++;
    }
    if(cnt==100){
        break;
    }
    i++;
}
console.log(prime);
