let arr = [1,2,3,4,5,6,7,8,90,123];
function search(arr,key){
    let i=0,j=arr.length-1;
    while(i<=j){
        let mid=Math.floor((i+j)/2);
        if(arr[mid]===key){
            return mid;
        }
        else if(arr[mid]>key){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }
    return -1;
}

console.log(search(arr,6));