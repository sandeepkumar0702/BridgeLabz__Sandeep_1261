// function check(string1,string2){
//     if(string1.length===string2.length){
//         return string1.split("").sort().join("")===string2.split("").sort().join("");
//     }
//     return false;
// }
// console.log(check("abababababab","babababababa"));








let arr=[[123,23,-30,56],[12,23,45,76,54,32,-10],-20];
let ans=0;
let ansidx=0;
arr.forEach((arr1,idx)=>{
    let currans=0;
    if(Array.isArray(arr1)){
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]<currans){
                currans=arr1[i];
            }
        }
    }
    else{
        if(currans>arr1){
            currans=arr1;
        }
    }
    if(ans>currans){
        ans=currans;
        ansidx=idx;
    }
})
if(Array.isArray(arr[ansidx])){
    let paridx=0;
    for(let i=0;i<arr[ansidx].length;i++){
        if(arr[ansidx][i]===ans){
            paridx=i;
            break; 
        }
    }
    console.log(ans+" "+ansidx +" "+paridx);
}
else {
    console.log(ans+" "+ansidx);
}