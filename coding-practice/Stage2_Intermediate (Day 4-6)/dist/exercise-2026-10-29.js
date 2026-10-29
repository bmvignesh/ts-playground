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
