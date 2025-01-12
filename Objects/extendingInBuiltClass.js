class myArray extends Array{
    sum(){
        console.log(this[0]);
        let sum=this.reduce((acc,ele)=>{
            return acc+ele;
        });
        return sum;
    }
    average(){
        console.log(`${this.sum()}`);
        return this.sum/this.length;
    }
}
let arr=[1,2,3,4,5,6];
let myarray=new myArray(...arr);
console.log(myarray.average());