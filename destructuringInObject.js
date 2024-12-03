let student={
    name:"Sandy",
    rollno:1,
};
//standard way
// let {name,rollNo}=student;
// console.log(name +" "+ rollNo);


//variable rename
// let {name: studentName,rollno: rollNo}=student;
// console.log(studentName+" "+rollNo);

//default values
let {name,rollno,country="India"}=student;
console.log(name+" "+rollno+" "+country);