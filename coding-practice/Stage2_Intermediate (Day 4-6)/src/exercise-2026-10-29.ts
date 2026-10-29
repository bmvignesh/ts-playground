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

console.log('Failed Percentage: ' +`${(results1.filter(t=>t.status ==='Fail').length/results1.length)*100}`);