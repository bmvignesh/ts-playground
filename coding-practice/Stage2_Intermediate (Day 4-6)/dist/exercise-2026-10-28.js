"use strict";
//Exercise 1: Find Failed Test Cases
const testResultsb = [
    { testName: "Login", status: "Pass" },
    { testName: "Checkout", status: "Fail" },
    { testName: "Search", status: "Pass" },
    { testName: "Payment", status: "Fail" }
];
const failedtests = testResultsb.filter(t => t.status === 'Fail');
const passedtests = testResultsb.filter(t => t.status === 'Pass');
//console.log(failedtests[0].testName);
//console.log(failedtests[1].testName);
console.log('Printing only failed tests using forEach: ');
failedtests.forEach(t => console.log(t.testName));
//Exercise 2: Count Pass and Fail
console.log('Passed: ' + passedtests.length);
console.log('Failed: ' + failedtests.length);
//Exercise 3: Find Longest Test Name
const testsb = [
    "Login",
    "UserRegistration",
    "Search",
    "ProfileUpdate"
];
console.log('Longest Test Name: ' + testsb.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
}));
//Exercise 4: Environment Enum
var Environmenta;
(function (Environmenta) {
    Environmenta["DEV"] = "DEV";
    Environmenta["QA"] = "QA";
    Environmenta["UAT"] = "UAT";
    Environmenta["PROD"] = "PROD";
})(Environmenta || (Environmenta = {}));
console.log('Current Environment: ' + Environmenta.QA);
//Exercise 5: Automation Framework Class
class Framework {
    constructor() {
        this.name = '';
        this.language = '';
    }
    display() {
        console.log("Framework name: " + this.name);
        console.log("Language: " + this.language);
    }
}
const fw = new Framework();
fw.name = 'Playwright';
fw.language = 'Typescript';
fw.display();
//Exercise 6 (Most Important)
function executionStatus(time) {
    if (time <= 2)
        console.log('Fast');
    else if (time > 2 && time <= 5) {
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
console.log('Total: ' + executionTimesa.reduce((acc, curr) => (acc + curr), 0));
console.log('Average: ' + (executionTimesa.reduce((acc, curr) => (acc + curr), 0) / executionTimesa.length).toFixed(2));
console.log('Max: ' + executionTimesa.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}));
console.log('Min: ' + executionTimesa.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
}));
const employees = [
    { name: 'Kani', department: 'Admin', salary: 60000 },
    { name: 'Muthu', department: 'Clerk', salary: 75000 },
    { name: 'Senthil', department: 'Manager', salary: 90000 },
    { name: 'Murugan', department: 'Staff', salary: 71000 }
];
employees.forEach((emp, index) => {
    console.log(`Employee ${index + 1}: ${emp.name}`);
});
employees.forEach(emp => {
    console.log(`High Salary : ${emp.salary > 70000}`);
});
