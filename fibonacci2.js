function fib(n){
   let a=0n,b=1n;
   for(let i=2;i<=n;i++){
    let c=0n;
    c=a+b;
    a=b;
    b=c;
   }
   return b;
}
module.exports = { fib };