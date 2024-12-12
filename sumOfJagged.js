let jaggedArray = [[1, 2, 3],[4, 5],[6, 7, 8, 9]];

function sum(jaggedArray){
    let ans=0;
    for(let array of jaggedArray){
        ans+=array.reduce((acc,ele)=>{
            return ele+acc;
        });
    }
    return ans;
}
let ans=sum(jaggedArray);
console.log(ans);