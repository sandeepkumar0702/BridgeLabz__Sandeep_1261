class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
        }
        else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=newNode;
        }
        this.size++;
    }
    prepend(value){
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
        this.size++;
    }
    insertAtIndex(idx,value){
        if(idx<0 || idx>this.size){
            console.log("Invalid index");
            return;
        }
        else{
            if(idx===0){
                this.prepend(value);
            }
            else  if(idx===this.size){
                this.append(value);
            }
            else{
                let newNode=new Node(value);
                let cnt=0;
                let curr=this.head;
                while(cnt<idx){
                    curr=curr.next;
                    cnt++;
                }
                newNode.next=curr.next;
                curr.next=newNode;
                this.size++;
            }
        }
    }
    getSize(){
        return this.size;
    }
    print(){
        let curr=this.head;
        let list=[];
        while(curr){
            // console.log(curr.value);
            list.push(curr.value);
            curr=curr.next;
        }
        console.log(list);
    }
    removeFirst(){
        if(this.size==0){
            console.log("List is lraedy empty");
            return;
        }
        let curr=this.head;
        if(this.size==1){
            this.head=null;
        }
        else{
            this.head=curr.next;
        }
        this.size--;
        return curr.value;
    }
    removeLast(){
        if(this.size==0){
            console.log("List is already Empty");
            return;
        }
        let curr=this.head;
        if(this.size==1){
            this.head=null;
        }
        else{
            let prev=null;
            while(curr.next){
                prev=curr;
                curr=curr.next;
            }
            prev.next=null;
        }
        this.size--;
        return curr.value;
    }
    removeAtIndex(idx){
        if(idx<0 || idx>=this.size){
            console.log("invalid index");
            return;
        }
        if(idx===0){
            return this.removeFirst();
        }
        else if(idx==this.size-1){
            return this.removeLast();
        }
        else{
            let cnt=0;
            let curr=this.head;
            while(cnt<idx-1){
                curr=curr.next;
                cnt++;
            }
            let ans=curr.next.value;
            curr.next=curr.next.next;
            this.size--;
            return ans;
        }
    }
    removeByValue(value){
        if(this.size==0){
            console.log("List is Empty");
            return;
        }
        else if(this.size===1 ){
            if(this.head.value===value){
                let ans=this.head.value;
                this.head=null;
                this.size--;
                return ans;
            }
            else{
                console.log("value not found");
                return;
            }
        }
        else if(this.head.value===value){
            let ans=this.head.value;
            this.head=this.head.next;
            this.size--;
            return ans;
        }
        else{
            let curr=this.head;
            let prev=null;
            while(curr && curr.value!==value){
                prev=curr;
                curr=curr.next;
            }
            if(!curr){
                console.log("value not found");
                return ;
            }
            else{
                prev.next=curr.next;
                this.size--;
                return curr.value;
            }
        }
    }
}
let list=new LinkedList();
list.append(11);
list.prepend(12);
list.insertAtIndex(2,122);
list.insertAtIndex(1,-12);
list.print();
// console.log(list.getSize());
// list.removeFirst();
// console.log(list.removeLast());
// console.log(list.getSize());
list.removeByValue(-120);
// console.log(list.removeAtIndex(2));
list.print();
