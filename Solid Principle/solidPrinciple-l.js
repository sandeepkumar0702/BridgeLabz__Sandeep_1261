class Bird{
    activity() {
        console.log("Birds do some activity");
    }
}

class flyingBird extends Bird {
    activity() {
        console.log("Birds fly");
    }
}

class Penguin extends Bird {
    activity() {
        console.log("Penguin swim");
    }
}
function testBird(bird){
    bird.activity();
}
const Sparrow= new flyingBird();

const fish = new Bird();
// testBird(fish);

testBird(Sparrow);
// Sparrow.fly();