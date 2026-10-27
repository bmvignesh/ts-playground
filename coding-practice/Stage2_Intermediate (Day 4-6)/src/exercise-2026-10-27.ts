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

console.log('Name '+e.name);
console.log('Age '+e.age);
console.log('Designation '+e.designation);