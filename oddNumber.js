let n=100;
let ans=[];
let i=1;
while(i<=100){
    ans.push(i);
    i++;
}
ans=ans.filter((ele)=>{
    return ele%2!=0;
})
console.log(ans);