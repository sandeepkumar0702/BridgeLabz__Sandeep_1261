let arr=["apple","ten","banana","dog"];
// function fun(arr){
//     let i=0;
//     let done=false;
//     return{
//         next:function(){
//             if(i<arr.length){
//                 return {value:arr[i++],done};
//             }
//             else{
//                 done=true;
//                 return {done}
//             }
//         }
//     }

// }
function fun(arr){
    let i=arr.length-1;
    let done=false;
    return{
        next:function(){
            if(i>=0){
                return {value:arr[i--],done};
            }
            else{
                done=true;
                return {done}
            }
        }
    }

}
let ans=fun(arr);
console.log(ans.next());
console.log(ans.next());