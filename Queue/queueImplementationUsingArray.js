let queue=[];
function isEmpty(){
    if(queue.length==0){
        return true;
    }
    return false;
}
function enQueue(ele){
    queue.push(ele);
}
function deQueue(){
    if(isEmpty()){
        console.log("queue is empty");
        return ;
    }
    return queue.shift();
}
function peek(){
    if(isEmpty()){
        console.log("queue is empty");
        return ;
    }
    return queue[0];
}
function printQueue(){
    for(let i of queue){
        console.log(i);
    }
}
enQueue(10);
// deQueue();
// deQueue();
console.log(peek());
printQueue();