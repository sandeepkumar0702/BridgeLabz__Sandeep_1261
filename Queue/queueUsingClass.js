class Queue{
    constructor(){
        this.item=[];
    }
    isEmpty(){
        if(this.item.length==0){
            return true;
        }
        return false;
    }
    enQueue(ele){
        this.item.push(ele);
    }
    deQueue(){
        if(this.isEmpty()){
            console.log("queue is empty");
            return -1;
        }
        return this.item.shift();
    }
    peek(){
        if(this.isEmpty()){
            console.log("queue is empty");
            return ;
        }
        return this.item[0];
    }
    printQueue(){
        let queue=this.item;
        for(let i of queue){
            console.log(i);
        }
    }
}
let  q=new Queue();
q.enQueue(190);
q.enQueue(1234);
console.log(q.peek());
q.printQueue();
