function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let j=i-1;
        let temp=arr[i];
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

let arr = [64, 34, 25, -12, 22, 11,-90];
console.log(insertionSort(arr));
