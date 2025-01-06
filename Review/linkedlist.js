class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
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
    }
    palindrome(){
        if(this.head===null || this.head.next===null){
            return true;
        }
        let slow=this.head;
        let fast=this.head;
        while(fast&&fast.next) {
            slow=slow.next;
            fast=fast.next.next;
        }
        let prev=null;
        let curr=slow;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        let f=this.head;
        let s=prev;
        let isPalindrome = true;
        while(s){
            if (f.value!==s.value){
                isPalindrome=false;
                break;
            }
            f=f.next;
            s=s.next;
        }
        return isPalindrome;
    }
}
let list=new LinkedList();
list.append(11);
list.append(12);
list.append(13);
list.append(13);
list.append(12);
list.append(11);
console.log(list.palindrome());
