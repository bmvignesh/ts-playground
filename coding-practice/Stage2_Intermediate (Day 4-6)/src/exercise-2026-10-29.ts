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
alldefects
    .filter(d =>
        d.severity === 'High' ||
        d.severity === 'Critical'
    )
    .forEach(d => console.log(d.severity));

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

modules.forEach(t=>console.log(`${t.module} -> ${((t.passed/(t.passed+t.failed))*100).toFixed(2)}%`));

//Exercise 6: Interview Favorite

const numss = [5,10,15,20];

const answer = numss
    .filter(n => n > 10)
    .map(n => n / 5)
    .reduce((a,b) => a + b,0);

console.log(answer);

/*
filter result - [15,20]
map result - [3,4]
final reduce result - [7]
*/

//Bonus Challenge (Senior QA Manager Level)

const executionss = [
 {suite:"Smoke",passed:25,failed:3},
 {suite:"Regression",passed:120,failed:15},
 {suite:"Sanity",passed:40,failed:2}
];

const summary = executionss.reduce(
    (acc,curr)=>{
        acc.totalPassed += curr.passed;
        acc.totalFailed += curr.failed;
        return acc;
    },
    {
        totalPassed:0,
        totalFailed:0
    }
);

const totalTests =
    summary.totalPassed +
    summary.totalFailed;

const passPercentage =
    (summary.totalPassed/totalTests)*100;

console.log(summary.totalPassed);
console.log(summary.totalFailed);
console.log(totalTests);
console.log(passPercentage.toFixed(2));

//Exercise 1: Browser-wise Test Count using reduce()

interface TestRuns
{
    testName:string;
    browser:string;
}

const testruns:TestRuns[] = 
[
    { testName: "Login", browser: "Chrome" },
    { testName: "Search", browser: "Firefox" },
    { testName: "Profile", browser: "Chrome" },
    { testName: "Payment", browser: "Chrome" },
    { testName: "Checkout", browser: "Firefox" }
];

const browserCount = testruns.reduce<Record<string,number>>((acc,curr)=>{
    acc[curr.browser] = (acc[curr.browser]||0)+1;
    return acc;
},{});

console.log(browserCount);

//Exercise 2: Failed Test Percentage

const testresults = [
    { name: "Login", status: "Pass" },
    { name: "Search", status: "Fail" },
    { name: "Payment", status: "Fail" },
    { name: "Checkout", status: "Fail" },
    { name: "Profile", status: "Fail" }
];

const failcount = testresults.filter(t=>t.status==='Fail').length;

const failpercent = failcount/testresults.length*100;

console.log(`Failed percentage: ${failpercent.toFixed(2)}%`);

//Exercise 3: Class + Constructor + Filter

class Defects
{
    id:number;
    severity:string;

    constructor(id:number,severity:string)
    {
        this.id = id;
        this.severity = severity;
    }
}

const defectsa = [
    new Defect(101, "High"),
    new Defect(102, "Low"),
    new Defect(103, "Critical")];

defectsa.filter(d=>d.severity==='High'||d.severity==='Critical').forEach(d=>console.log(d.severity));

//Find Tests Executed Per Environment

const executions12 = [
    { testName: "Login", environment: "QA" },
    { testName: "Search", environment: "DEV" },
    { testName: "Payment", environment: "QA" },
    { testName: "Checkout", environment: "UAT" },
    { testName: "Profile", environment: "QA" },
    { testName: "Orders", environment: "DEV" }
];

console.log(executions12.reduce<Record<string,number>>((acc,curr)=>{
    acc[curr.environment] = (acc[curr.environment]??0)+1;
    return acc;
},{}));