const testResultsb = [
  { testName: "Login", status: "Pass" },
  { testName: "Checkout", status: "Fail" },
  { testName: "Search", status: "Pass" },
  { testName: "Payment", status: "Fail" }
];

console.log(testResultsb.filter(t=>t.status==='Fail'));
