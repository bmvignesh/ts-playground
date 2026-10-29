//Exercise 1: Count Tests by Browser

interface TestRun
{
    testName:string;
    browser:string;
}

const runs:TestRun[] = [

      { testName: "Login", browser: "Chrome" },
    { testName: "Search", browser: "Firefox" },
    { testName: "Profile", browser: "Chrome" },
    { testName: "Payment", browser: "Chrome" },
    { testName: "Checkout", browser: "Firefox" }
];

console.log(runs.reduce<Record<string,number>>((acc,curr)=>{
    acc[curr.browser] = (acc[curr.browser]??0)+1;
    return acc;
},{}));

//Exercise 2: Failed Tests Percentage

const results1 = [
    { name: "Login", status: "Pass" },
    { name: "Search", status: "Fail" },
    { name: "Payment", status: "Pass" },
    { name: "Checkout", status: "Fail" },
    { name: "Profile", status: "Fail" }
];

console.log('Failed Percentage: ' +`${(results1.filter(t=>t.status ==='Fail').length/results1.length)*100}%`);

//Exercise 3: Class + Array

class Defect
{
    id:number;
    severity:string;

    constructor(id:number,severity:string)
    {
        this.id = id;
        this.severity = severity;
    }
}

const d1 = new Defect(101,'High');
const d2 = new Defect(102,'Low');
const d3 = new Defect(103,'Critical');

const alldefects: Defect[] = [d1,d2,d3];
console.log(alldefects.filter(d=>d.severity));

//Exercise 4: Generic Array Printer

function printArray<T>(items:T[]):void
{
    for(let item of items)
        console.log(item);
}

printArray<number>([10,20,30]);
printArray<string>(["Playwright","Selenium","Cypress"]);

//Exercise 5: QA Dashboard (Important)

const modules = [
 {module:"Login",passed:40,failed:5},
 {module:"Search",passed:20,failed:10},
 {module:"Payment",passed:35,failed:5}
];

modules.forEach(t=>console.log(t.module +` -> ${((t.passed/(t.passed+t.failed))*100).toFixed(2)}%`));