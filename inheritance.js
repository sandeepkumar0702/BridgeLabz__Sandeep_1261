class animal{
    constructor(name){
        this.name=name;
    }
    sound(){
        console.log(`${this.name} makes this sound`);
    }
}
class dog extends animal{
    sound(){
        console.log(`${this.name}  barks`);
    }
}
let  d=new dog("Jackey");
d.sound();