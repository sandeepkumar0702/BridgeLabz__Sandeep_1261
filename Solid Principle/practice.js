class bird{
    activity(){
        console.log("Do some activity");
    }
}
class flyingBird extends bird{
    activity(){
        console.log("bird cna fly");
    }
}
class penguin extends bird{
    activity(){
        console.log("can swim");
    }
}
function activity1(b){
    b.activity();
}
const Bird=new flyingBird();
const Penguin= new penguin();
activity1(Bird);