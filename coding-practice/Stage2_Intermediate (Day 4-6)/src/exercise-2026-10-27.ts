interface Employees
{
    Name:string;
    Age:number;
    Designation:string;
}

const e:Employees = {
    Name:'Vignesh',
    Age:42,
    Designation :'QA Manager'
};

console.log(e +e.Name);
console.log(e.Age);
console.log(e.Designation);