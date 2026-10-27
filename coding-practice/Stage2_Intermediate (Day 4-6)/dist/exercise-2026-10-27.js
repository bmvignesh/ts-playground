"use strict";
const e = {
    name: 'Vignesh',
    age: 42,
    designation: 'QA Manager'
};
console.log('Name: ' + e.name);
console.log('Age: ' + e.age);
console.log('Designation: ' + e.designation);
const e1 = {
    name: 'Ganesh',
    age: 25,
    designation: 'Automation Tester'
};
console.log('Name :' + e1.name);
console.log('Age :' + e1.age);
console.log('Designation :' + e1.designation);
const emp1 = {
    name: 'Vidhya',
    age: 25
};
const emp2 = {
    name: 'Latha',
    age: 38,
    designation: 'QA Lead'
};
console.log('Emp1 Name :' + emp1.name);
console.log('Emp1 Age :' + emp1.age);
console.log('Emp2 Name :' + emp2.name);
console.log('Emp2 Age :' + emp2.age);
console.log('Emp2 Designation :' + emp2.designation);
let employeeId;
employeeId = 101;
console.log(employeeId);
employeeId = 'EMP101';
console.log(employeeId);
function greet(name) {
    return 'Hello ' + name;
}
console.log(greet('Vignesh'));
function add(a, b) {
    return a + b;
}
console.log(add(2, 6));
function introduce(name, designation) {
    console.log(name + ' ' + designation);
}
introduce("Vignesh", "QA Manager");
introduce("Ravi");
const emps = [
    { name: "Vignesh", age: 39 },
    { name: "Ravi", age: 30 },
    { name: "Priya", age: 28 }
];
for (let e of emps) {
    console.log(e.name + ' - ' + e.age);
}
for (let e of emps) {
    if (e.age > 30) {
        console.log(e.name + ' - ' + e.age);
    }
}
console.log(emps.reduce((acc, curr) => (acc + curr.age), 0));
const testsa = [
    { id: 1, title: "Login", status: "Passed" },
    { id: 2, title: "Checkout", status: "Failed" },
    { id: 3, title: "Search", status: "Passed" },
    { id: 4, title: "Profile", status: "Blocked" }
];
console.log('Print all test cases:');
for (let test of testsa) {
    console.log('Id - ' + test.id + ' Title - ' + test.title + ' Name- ' + test.status);
}
console.log('Print only Passed test cases:');
console.log(testsa.filter(t => t.status === 'Passed'));
console.log('Count Passed test cases');
console.log(testsa.filter(t => t.status === 'Passed').length);
console.log('Count Failed test cases');
console.log(testsa.filter(t => t.status === 'Failed').length);
var Environment;
(function (Environment) {
    Environment["DEV"] = "DEV";
    Environment["QA"] = "QA";
    Environment["UAT"] = "UAT";
    Environment["PROD"] = "PROD";
})(Environment || (Environment = {}));
console.log('Current environment: ' + Environment.QA);
var Priority;
(function (Priority) {
    Priority["Low"] = "Low";
    Priority["Medium"] = "Medium";
    Priority["High"] = "High";
    Priority["Critical"] = "Critical";
})(Priority || (Priority = {}));
console.log('Bug priority :' + Priority.Critical);
function printstring(value) {
    return value;
}
console.log(printstring('Vignesh'));
function printnumber(value) {
    return value;
}
console.log(printnumber(123));
function printvalue(value) {
    return value;
}
console.log(printvalue('Vignesh'));
console.log(printvalue(123));
console.log(printvalue(false));
function displayItems(items) {
    for (let item of items) {
        console.log(item);
    }
}
displayItems(['chrome', 'safari', 'firefox']);
displayItems([10, 20, 30]);
