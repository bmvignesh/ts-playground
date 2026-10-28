//Exercise 1: Find Failed Test Cases
const testResultsb = [
  { testName: "Login", status: "Pass" },
  { testName: "Checkout", status: "Fail" },
  { testName: "Search", status: "Pass" },
  { testName: "Payment", status: "Fail" }
];

const failedtests = testResultsb.filter(t=>t.status==='Fail');
const passedtests = testResultsb.filter(t=>t.status==='Pass');
//console.log(failedtests[0].testName);
//console.log(failedtests[1].testName);
console.log('Printing only failed tests using forEach: ');
failedtests.forEach(t=>console.log(t.testName));

//Exercise 2: Count Pass and Fail
console.log('Passed: '+passedtests.length);
console.log('Failed: '+failedtests.length);


//Exercise 3: Find Longest Test Name
const testsb = [
  "Login",
  "UserRegistration",
  "Search",
  "ProfileUpdate"
];

console.log('Longest Test Name: '+testsb.reduce((acc,curr)=>{
    return curr.length > acc.length ? curr:acc;
}));

//Exercise 4: Environment Enum
enum Environmenta
{
    DEV = 'DEV',
    QA = 'QA',
    UAT = 'UAT',
    PROD = 'PROD'
}

console.log('Current Environment: '+Environmenta.QA);

//Exercise 5: Automation Framework Class

class Framework
{
   name:string ='';
   language:string=''; 
   display():void
   {
        console.log("Framework name: "+this.name);
        console.log("Language: "+this.language);
   }   
}

const fw = new Framework();
fw.name = 'Playwright';
fw.language = 'Typescript';
fw.display();

//Exercise 6 (Most Important)

function executionStatus(time:number)
{
    if(time<=2)
        console.log('Fast');
    else if(time>2 && time <=5 )
    {
        console.log('Normal');
    }
    else
        console.log('Slow');
}

executionStatus(1.5);
executionStatus(3.4);
executionStatus(6.2);

//Bonus Challenge (QA Manager Level)

const executionTimesa = [2.5, 1.8, 3.2, 2.1, 4.0];
console.log('Total: '+executionTimesa.reduce((acc,curr)=>(acc+curr),0));
console.log('Average: '+(executionTimesa.reduce((acc,curr)=>(acc+curr),0)/executionTimesa.length).toFixed(2));
console.log('Max: '+executionTimesa.reduce((acc,curr)=>{
    return curr > acc ? curr : acc;
}));
console.log('Min: '+executionTimesa.reduce((acc,curr)=>{
    return curr<acc ? curr:acc;
}));

//Exercise 1: Interface + Array

interface Employeea
{
    name:string;
    department:string;
    salary:number
}

const employees: Employeea[] = [
        { name: 'Kani', department: 'Admin', salary: 60000 },
    { name: 'Muthu', department: 'Clerk', salary: 75000 },
    { name: 'Senthil', department: 'Manager', salary: 90000 },
    { name: 'Murugan', department: 'Staff', salary: 71000 }
];

employees.forEach((emp, index) => {
    console.log(`Employee ${index + 1}: ${emp.name}`);
});

employees.forEach(emp => {
    if(emp.salary > 70000)
        console.log(emp.salary);
});

//Exercise 2: Map
const testCasesb = [
  "Login",
  "Search",
  "Checkout"
];
console.log(testCasesb.map(t=>("TC_").concat(t)));

//Exercise 3: Find

const defects = [
 {id:101,status:"Open"},
 {id:102,status:"Closed"},
 {id:103,status:"In Progress"}
];

console.log('Defect 102 details: '+defects.find(d=>d.id===102));

//Exercise 4: Generic Function

function printValue<T>(value:T):void
{
    console.log(value);
}

printValue("Automation");
printValue(100);
printValue(true);

//Exercise 5 (Most Important)

class TestCases
{
   testName:string='';
   status:string='';

   constructor(testName:string,status:string)
   {
      this.testName = testName;
      this.status = status;
   }

   display()
   {
      console.log('Test Name: '+this.testName);
      console.log('Status Name: '+this.status);
   }
}

const tc1 = new TestCases('Login Test','Passed');
const tc2 = new TestCases('Search Test','Failed');
const tc3 = new TestCases('Print Test','Blocked');

tc1.display();
tc2.display();
tc3.display();

//Exercise 1: Filter + Map Combination

const testCases1 = [
  { name: "Login", status: "Pass" },
  { name: "Search", status: "Fail" },
  { name: "Checkout", status: "Pass" },
  { name: "Payment", status: "Fail" }
];

console.log(testCases1.filter(test=>test.status==='Fail').map(t=>`FAILED_${t.name}`));

//Exercise 2: Find Highest Execution Time

const executionTimes1 = [2.4, 4.1, 1.8, 5.7, 3.2];

console.log('Highest Execution Time: '+executionTimes1.reduce((acc,curr)=>{
    return curr>acc ? curr:acc;
}));

//Exercise 3: Interface + Filter

interface Defect
{
    id:number;
    severity:string;
}

const defects1: Defect[] = 
[
     {id:101,severity:"High"},
 {id:102,severity:"Low"},
 {id:103,severity:"Critical"},
 {id:104,severity:"Medium"}
];

const criticalDefects = defects1.filter(
    d => d.severity === 'High' || d.severity === 'Critical'
);

console.log(criticalDefects);

//Exercise 4: Class with Method

class Employeez
{
    name:string;
    salary:number;
    constructor(name:string,salary:number)
    {
        this.name = name;
        this.salary = salary;
    }
    isHighearner()
    {
        if(this.salary>75000)
            return 'Yes';
        else
            return 'No';
    }
}
const em1 = new Employeez('Kani',35000);
const em2 = new Employeez('Murugan',80000);

console.log(em1.name +' : '+ em1.isHighearner());
console.log(em2.name +' : '+ em2.isHighearner());

//Exercise 5: Enum + Function

enum Browser
{
   CHROME='CHROME',
   FIREFOX='FIREFOX',
   EDGE='EDGE'
}

function launchBrowser(browser:Browser)
{
    console.log(browser);
}

launchBrowser(Browser.CHROME);
launchBrowser(Browser.EDGE);

//Exercise 6 (QA Automation Scenario)

const testResults3 = [
 {name:"Login",time:2.1},
 {name:"Search",time:6.3},
 {name:"Checkout",time:1.9},
 {name:"Payment",time:7.2}
];

testResults3.filter(t=>t.time>5).forEach(t=>console.log(t.name));

//Bonus Challenge (QA Manager Level)

const executions = [
 {module:"Login",passed:20,failed:2},
 {module:"Search",passed:15,failed:5},
 {module:"Payment",passed:10,failed:1}
];

console.log(executions.reduce((acc,curr)=>(acc+curr.passed),0));
console.log(executions.reduce((acc,curr)=>(acc+curr.failed),0));

//1. Optional Properties

interface Empl
{
    id:number;
    name:string;
    manager?:string;
}

const empls:Empl[] = [
     {id:1,name:"Vignesh"},
    {id:2,name:"Kani",manager:"Ravi"},
    {id:3,name:"Murugan"}
]

empls.forEach(e=>{
    if(e.manager)
        console.log(e.name +' -> '+e.manager)
    else
        console.log(e.name +' -> No manager')
});

//2. Generic Function

function getFirstItem<T>(items:T[]):T
{
    return items[0];
}

const numbers1 = [100,200,300];
const names1 = ["Vignesh","Kani","Murugan"];

console.log(getFirstItem<number>(numbers1));
console.log(getFirstItem<string>(names1));

//3. Sort Test Results

const testsx = [
 {name:"Login",duration:4},
 {name:"Search",duration:2},
 {name:"Checkout",duration:8},
 {name:"Payment",duration:1}
];

const dur = testsx.forEach(t=>t.duration);
console.log(dur);

//4. QA Dashboard Challenge

const executions2 = [
 {module:"Login", passed:20, failed:2},
 {module:"Search", passed:15, failed:5},
 {module:"Payment", passed:10, failed:1}
];

executions2.forEach(t=>console.log(t.module+' : '+t.passed/(t.passed+t.failed)*100));