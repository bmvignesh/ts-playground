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

console.log(runs.reduce((acc,curr)=>{
    let chromecount=0,firefoxcount=0;
    if(curr.browser === 'Chrome')
             chromecount++;
    if(curr.browser === 'Firefox')
            firefoxcount++;
        return acc;
}));