let n=10;
let ans=[];
for(let i=1;i<=n;i++){
    ans.push(i);
}
let sum=ans.reduce((acc,ele)=>{
    return acc+ele;
});
console.log(sum);