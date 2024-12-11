class ninja{
    constructor(name){
        this.name=name;
        this.age=21;
    }
    greet(){
        console.log("Namaste");
    }
}
let flyingninja = (ninja)=>{
    ninja.fly=()=>{
        console.log("Ninja flying");
    };
}
let sandy=new ninja("sandy");
let sam=new ninja("sam");
flyingninja(sandy);
console.log(sandy);
sandy.fly();
console.log(sam);


