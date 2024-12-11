let start=10,end=30;
let cnt=0;
for(let i=start+1;i<end;i++){
    if(i%2==0){
        cnt+=i;
    }
}
console.log(cnt);