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
console.log(alldefects.filter(d => d.severity));
//Exercise 4: Generic Array Printer
function printArray(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
printArray([10, 20, 30]);
printArray(["Playwright", "Selenium", "Cypress"]);
