function fib(n){
    let arr=[0,1];
    for(let i=2;i<n;i++){
        let c=arr[i-1]+arr[i-2];
        arr.push(c);
    }
    return arr;
}
console.log(fib(10));