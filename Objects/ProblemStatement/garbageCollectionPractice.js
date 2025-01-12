//garbage collection
function createObject() {
    let tempObject={ name: "sandy", value: 100 };
    console.log(tempObject);
    return tempObject;
}

let obj=createObject();
obj = null;
console.log(obj);
