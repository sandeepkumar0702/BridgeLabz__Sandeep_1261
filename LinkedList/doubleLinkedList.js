class Node {
    constructor(value){
      this.value=value;
      this.next=null
      this.prev=null; 
    }
}
class DoublyLinkedList{
    constructor(){
      this.head=null;
      this.tail=null; 
      this.size=0;  
    }
    append(value) {
      const newNode=new Node(value);
      if (!this.head){
        this.head=newNode;
        this.tail=newNode;
      } 
      else{
        this.tail.next = newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
      }
      this.size++;
    }
    prepend(value){
      const newNode=new Node(value);
      if(!this.head){
        this.head=newNode;
        this.tail=newNode;
      } 
      else{
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
      }
      this.size++;
    }
    insertAtIndex(idx,value){
      if (idx<0 || idx>this.size){
        console.log("Invalid index");
        return;
      }
      if(idx===0){
        return this.prepend(value);
      }
      if(idx===this.size){
        return this.append(value);
      }
      else{
        const newNode=new Node(value);
        let current=this.head;
        let count=0;
        while(count<idx){
            current=current.next;
            count++;
        }
        newNode.next=current;
        newNode.prev=current.prev;
        if(current.prev){
            current.prev.next=newNode;
        }
        current.prev=newNode;
        this.size++;
      }
    }
    removeFirst() {
      if(!this.head){
        console.log("List is already empty");
        return null;
      }
      const value=this.head.value;
      this.head=this.head.next;
      if(this.head){
        this.head.prev=null;
      } 
      else {
        this.tail = null;
      }
      this.size--;
      return value;
    }
    removeLast(){
      if(!this.head){
        console.log("List is already empty");
        return null;
      }
      const value=this.tail.value;
      this.tail=this.tail.prev;
      if(this.tail){
        this.tail.next=null;
      } 
      else{
        this.head=null;
      }
      this.size--;
      return value;
    }
    removeAtIndex(idx){
      if (idx<0 || idx>=this.size) {
        console.log("Invalid index");
        return null;
      }
      if (idx===0){
        return this.removeFirst();
      }
      if(idx===this.size-1){
        return this.removeLast();
      }
      else{
        let current=this.head;
        let count=0;
        while(count<idx-1) {
            current=current.next;
            count++;
        }
        current.prev.next=current.next;
        current.next.prev=current.prev;
        this.size--;
        return current.value;
      }
    }
    removeByValue(value){
      if (!this.head) {
        console.log("List is empty");
        return null;
      }
      let current=this.head;
      while(current){
        if(current.value===value) {
          if(current.prev){
            current.prev.next=current.next;
          }
          if(current.next){
            current.next.prev=current.prev;
          }
          if(current===this.head){
            this.head=current.next;
          }
          if(current===this.tail){
            this.tail=current.prev;
          }
          this.size--;
          return value;
        }
        current=current.next;
      }
      console.log("Value not found");
      return null;
    }
    getSize(){
      return this.size;
    }
    printForward(){
      let current=this.head;
      let list=[];
      while(current){
        list.push(current.value);
        current=current.next;
      }
      console.log("list from forward",list);
    }
    printBackward() {
      let current = this.tail;
      const list = [];
      while (current) {
        list.push(current.value);
        current = current.prev;
      }
      console.log("List form Back:",list);
    }
  }
  let list=new DoublyLinkedList();
//   list.append(11);
//   list.prepend(12);
//   list.insertAtIndex(2,122);
//   list.insertAtIndex(1,-12);
//   list.printForward(); 
//   list.printBackward(); 
//   console.log("Removed First:",list.removeFirst());
//   console.log("Removed Last:",list.removeLast()); 
//   list.printForward(); 
  
//   list.removeAtIndex(0);
//   list.printForward(); 
  
//   list.removeByValue(11);
//   list.printForward(); 
  
  console.log("size:",list.getSize());   
  