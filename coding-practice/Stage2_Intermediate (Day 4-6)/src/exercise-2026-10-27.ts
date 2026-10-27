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

function add(a:number,b:number):number
{
    return a+b;
}

console.log(add(2,6));

function introduce(name:string,designation?:string):void
{
    console.log(name + ' '+designation);
}
introduce("Vignesh","QA Manager");
introduce("Ravi");

type emp = {
    name:string;
    age:number;
}

const emps:emp[] = [

 {name:"Vignesh", age:39},
 {name:"Ravi", age:30},
 {name:"Priya", age:28}
]

for (let e of emps)
{
    console.log(e.name +' - '+ e.age);
}

for(let e of emps)
{
    if(e.age>30)
    {
        console.log(e.name+' - '+e.age);
    }
}
console.log(emps.reduce((acc,curr)=>(acc+curr.age),0));
type TestCase = {
    id: number;
    title: string;
    status: "Passed" | "Failed" | "Blocked";
};

const testsa:TestCase[] = [
 {id:1,title:"Login",status:"Passed"},
 {id:2,title:"Checkout",status:"Failed"},
 {id:3,title:"Search",status:"Passed"},
 {id:4,title:"Profile",status:"Blocked"}
]

console.log('Print all test cases:');

for(let test of testsa)
{
    console.log('Id - ' +test.id +' Title - '+test.title+' Name- '+test.status);
}

console.log('Print only Passed test cases:');

console.log(testsa.filter(t=>t.status==='Passed'));

console.log('Count Passed test cases');

console.log(testsa.filter(t=>t.status==='Passed').length);

console.log('Count Failed test cases');

console.log(testsa.filter(t=>t.status==='Failed').length);

enum Environment
{
    DEV = 'DEV',
    QA = 'QA',
    UAT = 'UAT',
    PROD = 'PROD'
}

console.log('Current environment: ' +Environment.QA);

enum Priority
{
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
    Critical = 'Critical'
}

console.log('Bug priority :' +Priority.Critical);

function printstring(value:string):string
{
    return value;
}

console.log(printstring('Vignesh'));

function printnumber(value:number):number
{
    return value;
}

console.log(printnumber(123));

function printvalue<T>(value:T):T
{
    return value;
}

console.log(printvalue<string>('Vignesh'));
console.log(printvalue<number>(123));
console.log(printvalue<boolean>(false));

function displayItems<T>(items:T[]):void
{
    for(let item of items)
    {
        console.log(item);
    }
}

displayItems<string>(['chrome','safari','firefox']);
displayItems<number>([10,20,30]);