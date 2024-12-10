console.log("poly");
class shape{
    draw(){
        console.log("draw a shape");
    }
}
class circle extends shape{
    draw(){
        console.log("draw a circle");
    }
}
let p1=new shape();
p1.draw();
let p2=new circle();
p2.draw();


