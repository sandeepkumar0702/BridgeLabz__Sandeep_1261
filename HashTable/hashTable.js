class HashTable{
    constructor(size){
        this.size=size;
        this.arr=new Array(size);
    }
    getHash(key){
        return key%this.size;
    }
    set(key,value){
        let hashkey=this.getHash(key);
        if(!this.arr[hashkey]){
            this.arr[hashkey]=[];
        }
        else{
            for(let p of this.arr[hashkey]){
                if(p[0]===key){
                    p[1]=value;
                    return;
                }
            }
        }
        this.arr[hashkey].push([key,value]);
    }
    print(){
        console.log(this.arr);
    }
    get(key){
        let hashkey=this.getHash(key);
        if(!this.arr[hashkey]){
            return "item is not presnt";
        }
        else{
            for(let p of this.arr[hashkey]){
                if(p[0]===key){
                    return p[1];
                }
            }
        }
        return "Item not presentt";
    }
    remove(key){
        let hashkey=this.getHash(key);
        if(!this.arr[hashkey]){
            return ;
        }
        else{
            this.arr[hashkey]=this.arr[hashkey].filter((p)=>{
                return p[0]!==key;
            })
        }
    }
    getKeys(){
        let keys=[];
        let ans=this.arr;
        for(let i of ans){
            if(i){
                for(let p of i){
                    keys.push(p[0]);
                }
            }
        }
        console.log(keys);
    }
    getValues(){
        let values=[];
        let ans=this.arr;
        for(let i of ans){
            if(i){
                for(let p of i){
                    values.push(p[1]);
                }
            }
        }
        console.log(values);
    }
}
let hashTable=new HashTable(53);
hashTable.set(53,6);
hashTable.set(53,7);
hashTable.set(106,123);
// console.log(hashTable.get(10));
// hashTable.remove(53);
// hashTable.remove(26);


/// get keys
hashTable.getKeys();
hashTable.getValues();


hashTable.print();