let obj={
    a:2,
    myfun:function(){
        console.log(` in myfun`);
        return 1;
    }
    
}

console.log(obj);
let ans=obj.myfun();
console.log(ans);