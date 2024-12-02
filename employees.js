// list of employees with their salaries
// filter  employees earning more then the specified amount
// map the filtered employees to show their name and  updated salary after ten percent increment
// use reduce to calculate the total salary for theses employees
let ps=require('prompt-sync');
let p=ps();
let Employees=[
    { name: 'Bob', salary: 75321 },
    { name: 'Hannah', salary: 67452 },
    { name: 'Frank', salary: 87623 },
    { name: 'Steve', salary: 92345 },
    { name: 'Lily', salary: 67345 },
    { name: 'Mike', salary: 53212 },
    { name: 'Julia', salary: 84764 },
    { name: 'Tina', salary: 76523 },
    { name: 'Uma', salary: 65874 },
    { name: 'David', salary: 76543 },
    { name: 'Grace', salary: 82344 },
    { name: 'Charlie', salary: 65432 },
    { name: 'Rachel', salary: 90876 },
    { name: 'Quincy', salary: 73456 },
    { name: 'Oscar', salary: 78932 },
    { name: 'Ian', salary: 89123 },
    { name: 'Kyle', salary: 93214 },
    { name: 'Alice', salary: 87654 },
    { name: 'Nina', salary: 81234 },
    { name: 'Paul', salary: 93321 }
];  

function numberOfEmployees(){
    let amount=p("Enter the amount");
    let ans=Employees.filter((employee)=>{
        return employee.salary>amount;
    });
    return ans;
}
// Employees=numberOfEmployees();
function upadteSalary(){
    let ans=Employees.map((employee)=>{
        let salary=parseInt(employee.salary);
        let name=employee.name;
        salary=salary+salary*(10/100);
        return {name,salary};
    });
    return ans;
}

Employees=upadteSalary();
console.log(Employees);
function findtotalSalary(){
    return Employees.reduce((acc,employee)=>{
        return acc+employee.salary;
    },0)
}
let totalSalary=findtotalSalary();
console.log(totalSalary);