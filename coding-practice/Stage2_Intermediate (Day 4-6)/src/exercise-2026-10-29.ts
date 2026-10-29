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

//Find Total API Calls by Status Code

const apiLogs = [
    { endpoint: "/login", status: 200 },
    { endpoint: "/search", status: 500 },
    { endpoint: "/profile", status: 200 },
    { endpoint: "/payment", status: 404 },
    { endpoint: "/orders", status: 200 },
    { endpoint: "/logout", status: 500 }
];

console.log(apiLogs.reduce((acc,curr)=>{
    acc[curr.status] = (acc[curr.status]??0)+1;
    return acc;
},{} as Record<number,number>));

//Exercise 3: Class + Constructor

class BrowserTest

{
    testName:string;
    browser:string;

    constructor(testName:string,browser:string)
    {
        this.testName = testName;
        this.browser = browser;   
    }
    display():void
    {
        console.log(`Test: ${this.testName} Browser: ${this.browser}`);
    }
}
const t1 = new BrowserTest("Login","Chrome");
const t2 = new BrowserTest("Search","Firefox");
const t3 = new BrowserTest("Checkout","Edge");

t1.display();
t2.display();
t3.display();

//Class + Method

class Build
{
    buildNumber:number;
    status:string;

    constructor(buildNumber:number,status:string)
    {
        this.buildNumber = buildNumber;
        this.status = status;
    }

    isSuccessful():string
    {
        return `Build ${this.buildNumber} : ${this.status}`;
    }
}

const b1= new Build(101,"PASS");
const b2 = new Build(102,"FAIL");
const b3 = new Build(103,"PASS");

console.log(b1.isSuccessful());
console.log(b2.isSuccessful());
console.log(b3.isSuccessful());

//Generic Function

function getLastItem<T>(items:T[]):T{
    return items[items.length-1];
}

const inums = [10,20,30,40];
const inames = ["Chrome","Firefox","Edge"];

console.log(getLastItem<number>(inums));
console.log(getLastItem<string>(inames));

function printTwice<T>(value:T):void
{
    console.log(value);
    console.log(value);
}

printTwice<string>("Playwright");
printTwice<number>(100);
printTwice<boolean>(true);

//Calculate Total Passed Tests

const amodules = [
    { module: "Authentication", passed: 45, failed: 5 },
    { module: "Orders", passed: 30, failed: 10 },
    { module: "Payments", passed: 25, failed: 5 }
];

console.log(`Total Passed: ${amodules.reduce((acc,curr)=>(acc+curr.passed),0)}`);

//Dashboard Calculation

const bmodules = [
    { module: "Authentication", passed: 45, failed: 5 },
    { module: "Orders", passed: 30, failed: 10 },
    { module: "Payments", passed: 25, failed: 5 }
];

console.log(`Overall Pass %: ${bmodules.reduce((acc,curr)=>
    (curr.passed/(curr.passed+curr.failed))*100,0).toFixed(2)}`);

//QA Dashboard (Real Automation Scenario)

const suiteResults = [
    {
        suite: "Smoke",
        executed: 50,
        passed: 48
    },
    {
        suite: "Regression",
        executed: 120,
        passed: 110
    },
    {
        suite: "Sanity",
        executed: 30,
        passed: 28
    }
];

suiteResults.forEach(t=>console.log
    (t.suite + ' = ' +((t.passed/t.executed)*100).toFixed(2)+'%'));

    const testRuns = [
    { executed: 100, passed: 90, failed: 10 },
    { executed: 80, passed: 75, failed: 5 },
    { executed: 120, passed: 110, failed: 10 }
];

const asummary = testRuns.reduce((acc,curr)=>{
    acc.totalExecuted += curr.executed;
    acc.totalPassed += curr.passed;
    acc.totalFailed +=curr.failed;
    return acc;
},
{
    totalExecuted:0,
    totalPassed:0,
    totalFailed:0
});

console.log(asummary);
console.log('Overall Pass % = '+((asummary.totalPassed/asummary.totalExecuted)*100).toFixed(2));

const bnums = [2,4,6,8,10];

const banswer = bnums
    .filter(n => n > 5)
    .map(n => n / 2)
    .reduce((acc,curr) => acc + curr,0);

console.log(banswer);

//banswer is 12
//Result after filter() - [6,8,10]
//Result after map() - [3,4,5]
//Result after reduce() - 12

//Exercise 1: Basic Inheritance

class Workerz
{
    name:string;
    constructor(name:string)
    {
        this.name = name;
    }

    display()
    {
        console.log(`Employee: ${this.name}`);
    }
}

class Manager extends Workerz
{
    department:string;

    constructor(name:string,department:string)
    {
        super(name);
        this.department = department;
    }
}
const m1 = new Manager("Vignesh","QA");
m1.display();
console.log('Department: '+m1.department);

//Exercise 2: Real Automation Example

class BaseTest
{
    browser:string;

    constructor(browser:string)
    {
        this.browser = browser;
    }

    launch()
    {
        console.log(`Launching ${this.browser}`);
    }
}

class LoginTest extends BaseTest
{
    execute()
    {
        console.log(`Executing login test`);
    }
}

const test = new LoginTest('Chrome');
test.launch();
test.execute();

//Exercise 3: Method Overriding

class Report
{
    generate()
    {
        console.log(`Generating Generic Report`);
    }
}

class AutomationReport extends Report
{
    generate()
    {
        console.log(`Generating Automation Report`);
    }
}

const areport = new AutomationReport();
areport.generate();

//Exercise 4: Multi-level Inheritance

class Application
{
    open()
    {
        console.log(`Application Opened`);
    }
}

class WebApplication extends Application
{
    login()
    {
        console.log('User logged in');
    }
}

class EcommerceApplication extends WebApplication
{
    order()
    {
        console.log(`Order placed`);
    }
}

const app = new EcommerceApplication();
app.open();
app.login();
app.order();

//Exercise 5: QA Automation Scenario

class aTestCase
{
    testName:string;

    constructor(testName:string)
    {
        this.testName = testName;
    }
    run()
    {
        console.log(`${this.testName} running`);
    }
}

class APITest extends aTestCase
{
    endpoint:string;
    constructor(testName:string,endpoint:string)
    {
        super(testName);
        this.endpoint=endpoint;
    }
}

const api = new APITest('Login API Test','/login');
api.run();
console.log(api.endpoint);

//Bonus Challenge

class A
{
    display()
    {
        console.log('A');
    }
}

class B extends A
{
    display()
    {
        console.log('B');
    }
}

const obj = new B();
obj.display();
//this will print B

//Exercise 1: Basic Inheritance (Vehicle → Car)

class Vehicle
{
    brand:string;

    constructor(brand:string)
    {
        this.brand = brand;
    }

    display()
    {
        console.log(`Brand: ${this.brand}`);
    }
}

class Car extends Vehicle
{
    model:string;

    constructor(brand:string,model:string)
    {
        super(brand);
        this.model = model;
    }
    show()
    {
        console.log(`Model: ${this.model}`);
    }
}

const car1 = new Car('Hyundai','Creta');
car1.display();
car1.show();

//Exercise 2: Automation Scenario (BasePage → DashboardPage)

class BasePage
{
    pageName:string;

    constructor(pageName:string)
    {
        this.pageName = pageName;
    }
    open()
    {
        console.log(`Opening ${this.pageName}`);
    }
}

class DashboardPage extends BasePage
{
    showWidgets()
    {
        console.log(`Displaying Widgets`);
    }
}

const dashboard = new DashboardPage('Dashboard');
dashboard.open();
dashboard.showWidgets();