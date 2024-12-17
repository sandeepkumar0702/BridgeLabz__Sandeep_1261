let arr = [64, 34, 25, -12, 22, 11,-90];
function search(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}

console.log(search(arr,640));