// Implement the bubble sort algorithm for an array of numbers
let arr=[23,34,345,1,3,4,5,2,344];
let n=arr.length;
for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            let t=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=t;
        }
    }
}
console.log(arr);
