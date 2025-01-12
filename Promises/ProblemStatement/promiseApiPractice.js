/* promise.allsettled
let c1=new Promise((resolve,reject)=>{
    resolve("age is more than 18");
})
let c2=new Promise((resolve,reject)=>{
    resolve("having visa");
})
function getVisa(){
    Promise.allSettled([c1,c2]).then(()=>{
        console.log("you can do your work");
    })
    .catch(()=>{
        console.log("you cannot work");
    })
}
getVisa();
*/


/* primse.any
let p1 = new Promise((resolve, reject) => {
    reject("Not qualified");
});
let p2 = new Promise((resolve, reject) => {
    resolve("Approved");
});

function checkApproval() {
    Promise.any([p1, p2])
        .then((result) => {
            console.log("Result:", result);
        })
        .catch(() => {
            console.log("No promises were resolved.");
        });
}
checkApproval();
*/




/*promose.race
let r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Finished Task 1");
    },1000);
});
let r2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failed Task 2");
    }, 1000);
});

function checkFirst() {
    Promise.race([r1, r2])
        .then((result) => {
            console.log("First settled promise:", result);
        })
        .catch((error) => {
            console.log("First settled promise failed with:", error);
        });
}
checkFirst();
*/


/* promise.all*/
let t1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 Complete");
    }, 1000);
});
let t2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2 Complete");
    }, 2000);
});

function checkAllTasks() {
    Promise.all([t1, t2])
        .then((results) => {
            console.log("All tasks completed:", results);
        })
        .catch((error) => {
            console.log("One of the tasks failed:", error);
        });
}
checkAllTasks();
