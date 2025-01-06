// Given a binary tree and a sum, check if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class Tree{
    constructor(){
        this.root=null;
    }
    insert(data){
        const newNode=new Node(data);
        if(this.root===null){
            this.root=newNode;
            return;
        }
        const queue=[this.root];
        while(queue.length>0){
            const current=queue.shift();
            if(current.left===null){
                current.left=newNode;
                return;
            } 
            else{
                queue.push(current.left);
            }
            if(current.right===null){
                current.right=newNode;
                return;
            } 
            else{
                queue.push(current.right);
            }
        }
    }
    path(target){
        return this.find(this.root,target);
    }
    find(root,target){
        if(!root){
            return false;
        }
        if(!root.left && !root.right){
            return target==root.data;
        }
        let rem=target-root.data;
        return this.find(root.left,rem) || this.find(root.right,rem);
    }
}
let tree=new Tree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
console.log(tree.path(4));