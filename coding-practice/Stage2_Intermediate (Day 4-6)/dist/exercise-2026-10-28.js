"use strict";
const testResultsb = [
    { testName: "Login", status: "Pass" },
    { testName: "Checkout", status: "Fail" },
    { testName: "Search", status: "Pass" },
    { testName: "Payment", status: "Fail" }
];
const failedtests = testResultsb.filter(t => t.status === 'Fail');
console.log(failedtests[0].testName);
console.log(failedtests[1].testName);
