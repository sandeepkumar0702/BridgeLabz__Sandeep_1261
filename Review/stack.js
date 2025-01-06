// 5)Min Stack
// Implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.
class Stack{
    constructor(){
        this.item=[];
        this.min=null;
    }
    add(element){
        this.item.push(element);
        if(this.min==null){
            this.min=element;
        }
        else{
            this.min=Math.min(this.min,element);
        }
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return ;
        }
        for(let i=0;i<this.item.size-1;i++){
            this.min=Math.min(this.min,this.item[i]);
        }
        if(this.item.size===1){
            this.min=null;
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
    getMin(){
        return this.min;
    }
}
let st=new Stack();
st.add(10);
st.add(12);
st.add(13);
st.add(110);
st.add(102);
console.log(st.peek());
console.log(st.pop());
console.log(st.getMin());

