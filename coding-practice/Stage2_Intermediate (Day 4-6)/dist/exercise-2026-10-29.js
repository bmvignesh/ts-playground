"use strict";
//Exercise 1: Count Tests by Browser
const runs = [
    { testName: "Login", browser: "Chrome" },
    { testName: "Search", browser: "Firefox" },
    { testName: "Profile", browser: "Chrome" },
    { testName: "Payment", browser: "Chrome" },
    { testName: "Checkout", browser: "Firefox" }
];
console.log(runs.reduce((acc, curr) => {
    acc[curr.browser] = (acc[curr.browser] ?? 0) + 1;
    return acc;
}, {}));
//Exercise 2: Failed Tests Percentage
const results1 = [
    { name: "Login", status: "Pass" },
    { name: "Search", status: "Fail" },
    { name: "Payment", status: "Pass" },
    { name: "Checkout", status: "Fail" },
    { name: "Profile", status: "Fail" }
];
console.log('Failed Percentage: ' + `${(results1.filter(t => t.status === 'Fail').length / results1.length) * 100}%`);
//Exercise 3: Class + Array
class Defect {
    constructor(id, severity) {
        this.id = id;
        this.severity = severity;
    }
}
const d1 = new Defect(101, 'High');
const d2 = new Defect(102, 'Low');
const d3 = new Defect(103, 'Critical');
const alldefects = [d1, d2, d3];
alldefects
    .filter(d => d.severity === 'High' ||
    d.severity === 'Critical')
    .forEach(d => console.log(d.severity));
//Exercise 4: Generic Array Printer
function printArray(items) {
    for (let item of items)
        console.log(item);
}
printArray([10, 20, 30]);
printArray(["Playwright", "Selenium", "Cypress"]);
//Exercise 5: QA Dashboard (Important)
const modules = [
    { module: "Login", passed: 40, failed: 5 },
    { module: "Search", passed: 20, failed: 10 },
    { module: "Payment", passed: 35, failed: 5 }
];
modules.forEach(t => console.log(`${t.module} -> ${((t.passed / (t.passed + t.failed)) * 100).toFixed(2)}%`));
//Exercise 6: Interview Favorite
const numss = [5, 10, 15, 20];
const answer = numss
    .filter(n => n > 10)
    .map(n => n / 5)
    .reduce((a, b) => a + b, 0);
console.log(answer);
/*
filter result - [15,20]
map result - [3,4]
final reduce result - [7]
*/
//Bonus Challenge (Senior QA Manager Level)
const executionss = [
    { suite: "Smoke", passed: 25, failed: 3 },
    { suite: "Regression", passed: 120, failed: 15 },
    { suite: "Sanity", passed: 40, failed: 2 }
];
const summary = executionss.reduce((acc, curr) => {
    acc.totalPassed += curr.passed;
    acc.totalFailed += curr.failed;
    return acc;
}, {
    totalPassed: 0,
    totalFailed: 0
});
const totalTests = summary.totalPassed +
    summary.totalFailed;
const passPercentage = (summary.totalPassed / totalTests) * 100;
console.log(summary.totalPassed);
console.log(summary.totalFailed);
console.log(totalTests);
console.log(passPercentage.toFixed(2));
const testruns = [
    { testName: "Login", browser: "Chrome" },
    { testName: "Search", browser: "Firefox" },
    { testName: "Profile", browser: "Chrome" },
    { testName: "Payment", browser: "Chrome" },
    { testName: "Checkout", browser: "Firefox" }
];
const browserCount = testruns.reduce((acc, curr) => {
    acc[curr.browser] = (acc[curr.browser] || 0) + 1;
    return acc;
}, {});
console.log(browserCount);
//Exercise 2: Failed Test Percentage
const testresults = [
    { name: "Login", status: "Pass" },
    { name: "Search", status: "Fail" },
    { name: "Payment", status: "Fail" },
    { name: "Checkout", status: "Fail" },
    { name: "Profile", status: "Fail" }
];
const failcount = testresults.filter(t => t.status === 'Fail').length;
const failpercent = failcount / testresults.length * 100;
console.log(`Failed percentage: ${failpercent.toFixed(2)}%`);
//Exercise 3: Class + Constructor + Filter
class Defects {
    constructor(id, severity) {
        this.id = id;
        this.severity = severity;
    }
}
const defectsa = [
    new Defect(101, "High"),
    new Defect(102, "Low"),
    new Defect(103, "Critical")
];
defectsa.filter(d => d.severity === 'High' || d.severity === 'Critical').forEach(d => console.log(d.severity));
//Find Tests Executed Per Environment
const executions12 = [
    { testName: "Login", environment: "QA" },
    { testName: "Search", environment: "DEV" },
    { testName: "Payment", environment: "QA" },
    { testName: "Checkout", environment: "UAT" },
    { testName: "Profile", environment: "QA" },
    { testName: "Orders", environment: "DEV" }
];
console.log(executions12.reduce((acc, curr) => {
    acc[curr.environment] = (acc[curr.environment] ?? 0) + 1;
    return acc;
}, {}));
//Find Total API Calls by Status Code
const apiLogs = [
    { endpoint: "/login", status: 200 },
    { endpoint: "/search", status: 500 },
    { endpoint: "/profile", status: 200 },
    { endpoint: "/payment", status: 404 },
    { endpoint: "/orders", status: 200 },
    { endpoint: "/logout", status: 500 }
];
console.log(apiLogs.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] ?? 0) + 1;
    return acc;
}, {}));
//Exercise 3: Class + Constructor
class BrowserTest {
    constructor(testName, browser) {
        this.testName = testName;
        this.browser = browser;
    }
    display() {
        console.log(`Test: ${this.testName} Browser: ${this.browser}`);
    }
}
const t1 = new BrowserTest("Login", "Chrome");
const t2 = new BrowserTest("Search", "Firefox");
const t3 = new BrowserTest("Checkout", "Edge");
t1.display();
t2.display();
t3.display();
//Class + Method
class Build {
    constructor(buildNumber, status) {
        this.buildNumber = buildNumber;
        this.status = status;
    }
    isSuccessful() {
        return `Build ${this.buildNumber} : ${this.status}`;
    }
}
const b1 = new Build(101, "PASS");
const b2 = new Build(102, "FAIL");
const b3 = new Build(103, "PASS");
console.log(b1.isSuccessful());
console.log(b2.isSuccessful());
console.log(b3.isSuccessful());
//Generic Function
function getLastItem(items) {
    return items[items.length - 1];
}
const inums = [10, 20, 30, 40];
const inames = ["Chrome", "Firefox", "Edge"];
console.log(getLastItem(inums));
console.log(getLastItem(inames));
function printTwice(value) {
    console.log(value);
    console.log(value);
}
printTwice("Playwright");
printTwice(100);
printTwice(true);
