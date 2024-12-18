class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class circularLinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            newNode.next=this.head;
        }
        else{
            let curr=this.head;
            while(curr.next!==this.head){
                curr=curr.next;
            }
            curr.next=newNode;
            newNode.next=this.head;
        }
        this.size++;
    }
    print(){
        let curr=this.head;
        let li=[];
        if(this.head){
            do{
                li.push(curr.value);
                curr=curr.next;
            }
            while(curr!==this.head);
        }
        console.log(li);
    }
    prepend(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            newNode.next=this.head;
        }
        else{
            let curr=this.head;
            while(curr.next!==this.head){
                curr=curr.next;
            }
            curr.next=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size++;
    }
    getSize(){
        return this.size;
    }
    insertAtIndex(idx,value){
        if(idx<0 || idx>this.size){
            console.log("Invaild index");
            return;
        }
        else{
            if(idx===0){
                return this.prepend(value);
            }
            else if(idx===this.size){
                return this.append(value);
            }
            else{
                let cnt=0;
                let curr=this.head;
                while(cnt<idx-1){
                    cnt++;
                    curr=curr.next;
                }
                let  newNode=new Node(value);
                newNode.next=curr.next;
                curr.next=newNode;
                this.size++;
            }

        }
    }
    removeFirst(){
        if(!this.head){
            return null;
        }
        const value=this.head.value;
        if(this.size===1){
          this.head=null;
        } 
        else{
            let curr=this.head;
            while(curr.next!==this.head){
              curr=curr.next;
            }
            this.head=this.head.next;
            curr.next=this.head;
        }
        this.size--;
        return value;
    }
    removeLast(){
        if(!this.head){
            return null;
        }
        let ans=-1;
        if(this.size===1){
            ans=this.head.value;
            this.head=null;
        }
        else{
            let curr=this.head;
            let prev=null;
            while(curr.next!==this.head){
                prev=curr;
                curr=curr.next;
            }
            ans=curr.value;
            prev.next=this.head;
        }
        this.size--;
        return ans;
    }
    removeAtIndex(idx){
        if(idx<0 || idx>=this.size){
            console.log("invalid index");
            return;
        }
        else{
            if(idx===0){
                return this.removeFirst();
            }
            else if(idx===this.size-1){
                return this.removeLast();
            }
            else{
                let curr=this.head;
                let cnt=0;
                while(cnt<idx-1){
                    curr=curr.next;
                    cnt++;
                }
                curr.next=curr.next.next;
                this.size--;
            }
        }
    }
}
let list=new circularLinkedList();
list.append(10);
list.append(20);
list.append(200);
// list.prepend(1000);
// list.insertAtIndex(2,90);
// list.removeFirst();
// list.removeFirst();
// list.removeLast();
// list.removeLast();
list.removeAtIndex(2);

list.print();
// console.log(list.getSize());
