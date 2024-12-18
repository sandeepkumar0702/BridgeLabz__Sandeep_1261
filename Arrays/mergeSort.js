let arr = [64, 34, 25, 12, 22, 11, -90];
function mergeSort(arr){
    if(arr.length <= 1){
        return arr ;
    }
    let mid=Math.floor(arr.length/2);
    let l=mergeSort(arr.slice(0,mid));
    let r=mergeSort(arr.slice(mid));
    return merge(l,r);
}
function merge(l,r){
    let i=0,j=0;
    let ans=[];
    while(i<l.length && j<r.length){
        if(l[i]<r[j]){
            ans.push(l[i]);
            i++;
        }
        else{
            ans.push(r[j]);
            j++;
        }
    }
    while(i<l.length){
        ans.push(l[i]);
        i++;
    }
    while(j<r.length){
        ans.push(r[j]);
        j++;

    }
    return ans;
}
console.log(mergeSort(arr));
