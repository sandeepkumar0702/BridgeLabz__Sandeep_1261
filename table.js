function table(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
function print(){
    for(let i=1;i<=10;i++){
        table(i);
    }
    console.log();
}
print();

