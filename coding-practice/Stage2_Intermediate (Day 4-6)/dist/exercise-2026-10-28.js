"use strict";
//Find Failed Test Cases
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
//Count Pass and Fail
console.log('Passed: ' + passedtests.length);
console.log('Failed: ' + failedtests.length);
//Find longest test name
const testsb = [
    "Login",
    "UserRegistration",
    "Search",
    "ProfileUpdate"
];
console.log('Longest Test Name: ' + testsb.reduce((acc, curr) => {
    let max = curr[0].length;
    if (curr.length > max)
        return curr;
    else
        return curr;
}));
var Environmenta;
(function (Environmenta) {
    Environmenta[Environmenta["DEV"] = 0] = "DEV";
    Environmenta[Environmenta["QA"] = 1] = "QA";
    Environmenta[Environmenta["UAT"] = 2] = "UAT";
    Environmenta[Environmenta["PROD"] = 3] = "PROD";
})(Environmenta || (Environmenta = {}));
console.log('Current Environment: ' + Environment.QA);
