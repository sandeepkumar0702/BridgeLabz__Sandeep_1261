function fun(){
    const details=` - Internship: Web Developer at Codesoft (Oct-Dec 2023)
        - Experience: Full-stack web development, problem-solving, collaboration
        - Technologies: Express.js, Node.js'`;

const isConfirmed=confirm(`confirm your details ${details}`);
if(isConfirmed){
    alert("Yor are selected");
}
else{
    alert("Yor are not selected");
    
}
}
fun();