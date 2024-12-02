
// Take a list of students and their grades.
// Classify them as pass or fail 
// Return total no of passing student


let Students=[
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 38 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 18 },
    { name: 'Ella', grade: 94 },
    { name: 'Frank', grade: 67 },
    { name: 'Grace', grade: 73 },
    { name: 'Hannah', grade: 89 },
    { name: 'Ian', grade: 90 },
    { name: 'Julia', grade: 81 },
];

let res=[];
function classifyFailOrPass(){
    for(let student of Students){
        let studentName=student.name;
        // console.log(student)
        let pass="Passed"
        if(student.grade<40){
            pass="Failed";
        }
        res.push({studentName,pass});
    }
}
classifyFailOrPass();
console.log(res);
let totalPassedStudent=res.filter((student)=>{
    return student.pass=='Passed';
}).length;
console.log(totalPassedStudent);