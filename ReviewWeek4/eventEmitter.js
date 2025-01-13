// Create a simple event emitter class that allows registering
//  event listeners and emitting events with data.


class events{
    on(data){
        this.emitter(data);
    }
    off(data){
        this.emitter(data);
    }
    emitter(data){
        console.log(data);
    }
}

let event=new events();
// let btnClicked=true;
let btnClicked=false;
if(btnClicked){
    event.on("Button is on");
}
else{
    event.off("Button is off");
}
