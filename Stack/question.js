// arr=[push(34),push(90),getmin(),pop(),push(12),push(1234),push(9876),getmax(),peek()];
// [null,null,34,null,null,null,9876,9876]

class Stack{
    constructor(){
        this.item=[];
    }
    add(element){
        this.item.push(element);
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return ;
        }
        return this.item.pop();
    }
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return ;
        }
        return this.item[this.item.length-1];
    }
    isEmpty(){
        return this.item.length==0;
    }
    printStack(){
        let ans=this.item;
        console.log(ans);
    }
    getMin(){
        let arrr=this.item;
        let ans=arrr.reduce((acc,ele)=>{
            return acc>ele? ele:acc;
        },arrr[0]);
        return ans;
    }
    getMax(){
        let arrr=this.item;
        let ans=arrr.reduce((acc,ele)=>{
            return acc<ele? ele:acc;
        },arrr[0]);
        return ans;
    }
}
let st=new Stack();
let arr=["push(34)","push(90)","getmin()","pop()","push(12)","push(1234)","push(9876)","getmax()","peek()"];
let ans=[];
for(let i of arr){
    if(i.substring(0,4)=="peek"){
        ans.push(st.peek());
    }
    else if(i.substring(0,4)=="push"){
        let curr=Number(i.substring(5,i.length-1));
        st.add(curr);
        ans.push(null);
    }
    else if(i.substring(0,3)=="pop"){
        st.pop();
        ans.push(null);
    } 
    else if(i.substring(0,6)=="getmin"){
        ans.push(st.getMin());
    }
    else if(i.substring(0,6)=="getmax"){
        ans.push(st.getMax());
    }
}
console.log(ans);