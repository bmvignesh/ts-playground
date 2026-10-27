interface Employee
{
    name:string;
    age:number;
    designation:string;
}

const e:Employee = {
    name:'Vignesh',
    age:42,
    designation :'QA Manager'
};

console.log('Name: '+e.name);
console.log('Age: '+e.age);
console.log('Designation: '+e.designation);

type Employees = {
    name:string;
    age:number;
    designation?:string;
}

const e1:Employees = {
    name:'Ganesh',
    age:25,
    designation :'Automation Tester'
}

console.log('Name :' +e1.name);
console.log('Age :' +e1.age);
console.log('Designation :' +e1.designation);

const emp1:Employees = {
    name:'Vidhya',
    age:25
}
const emp2:Employees = {
    name:'Latha',
    age:38,
    designation:'QA Lead'
}
console.log('Emp1 Name :'+emp1.name);
console.log('Emp1 Age :'+emp1.age);

console.log('Emp2 Name :'+emp2.name);
console.log('Emp2 Age :'+emp2.age);
console.log('Emp2 Designation :'+emp2.designation);

let employeeId: string|number;

employeeId = 101;
console.log(employeeId);
employeeId = 'EMP101';
console.log(employeeId);

function greet(name:string):string
{
    return 'Hello '+name;
}
console.log(greet('Vignesh'));