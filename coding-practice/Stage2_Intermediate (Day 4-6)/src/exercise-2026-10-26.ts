//print numbers
for(let i=1;i<=25;i++)
{
    console.log(i);
}

//even or odd

for(let i=1;i<=20;i++)
{
    if(i%2===0)
        console.log(i+" is Even");
    else
        console.log(i+" is Odd");
}

//sum of array
const numbers: number[] = [12, 15, 20, 8, 30];
console.log(numbers.reduce((acc,value)=>(acc+value),0));
let sum=0;
for(let a of numbers)
{
 sum = sum+a;
}
console.log('Sum of array is: ' +sum);
//largest number
const marks: number[] = [65, 72, 91, 88, 54];
let largest = marks[0];
for(let a=0;a<marks.length;a++)
{
    if(marks[a]>largest)
        largest = marks[a];
}
console.log('Largest number in the array is: ' +largest);

//count vowels
const word: string = "Automation";
let count=0;
for(let ch of word)
{
    if(ch.toLowerCase() === 'a' || ch.toLowerCase() === 'e' || ch.toLowerCase() === 'i' 
    || ch.toLowerCase() === 'o' || ch.toLowerCase() === 'u')
        count++;
}
console.log('Count of vowels is: '+count);

//square function

function square(a:number)
{
    return a*a;
}
console.log('Square is: ' +square(5));

//Bonus challenge

const names = ["Vignesh", "Raj", "Kumar", "A"];

for(let name of names)
{
    if(name.length>=5)
    {
        console.log(name+ ' is a Long name');
    }
    else
        console.log(name+ ' is a short name');
}

//interface
interface Studenta
{
    id:number;
    name:string;
    grade:string;
}

const student1: Studenta = {
    id:1,
    name:"Vignesh",
    grade: 'A'
}
const student2: Studenta = {
    id:2,
    name:"Madhesh",
    grade: 'B'
}
const student3: Studenta = {
    id:3,
    name:"Kumar",
    grade: 'C'
}
console.log(student1.id +' '+ student1.name +' '+ student1.grade);
console.log(student2.id +' '+ student2.name +' '+ student2.grade);
console.log(student3.id +' '+ student3.name +' '+ student3.grade);

//filter
const ages: number[] = [15, 18, 22, 17, 30, 14];
console.log(ages.filter(a=>a>=18));

//map
const numbera: number[] = [10, 15, 20, 25, 30];
let converted:string[] = [];
console.log(numbera.map(a=>a%2==0 ? 'EVEN': 'ODD'));

//QA Automation Real-world Scenario
const testResults = [
    "PASS",
    "FAIL",
    "PASS",
    "PASS",
    "FAIL"
];
let Passed = 0, Failed=0;
testResults.map(a=>a==="PASS" ? Passed++ : Failed++);
console.log('Passed: '+Passed);
console.log('Failed: '+Failed);

//Reduce
const salaries = [50000, 65000, 45000, 70000];
console.log('Total salary is :' +salaries.reduce((acc,sal)=>(acc+sal),0));

const highestsal = salaries.reduce((highest,currsal)=>{
    if(currsal>highest)
        return currsal;
    else
        return highest;
},salaries[0])

console.log('Highest salary is: ' +highestsal);
const executionTimes = [2.5, 1.8, 3.2, 2.1, 4.0];
let total = executionTimes.reduce((acc,time)=>(acc+time),0);
console.log('Total execution time is: '+total);
console.log('Average execution time is : '+(total/executionTimes.length).toFixed(2));

const testCases = [
    { name: "Login", status: "PASS" },
    { name: "Checkout", status: "FAIL" },
    { name: "Search", status: "PASS" },
    { name: "Profile", status: "PASS" }
];

let result = testCases.filter(test=>test.status==='FAIL');
console.log(result[0].name);

//Real QA Automation
const testCasesa = [
    { name: "Login", duration: 5, status: "PASS" },
    { name: "Search", duration: 2, status: "PASS" },
    { name: "Checkout", duration: 8, status: "FAIL" },
    { name: "Profile", duration: 3, status: "PASS" },
    { name: "Payment", duration: 10, status: "FAIL" }
];

const failtest = testCasesa.filter(test=>test.status === 'FAIL');
for(let n of failtest)
{
    console.log('Failed test name is '+n.name);
}

console.log('Total execution time is : ' +testCasesa.reduce((acc,curr)=>(acc+curr.duration),0));
const tests = testCasesa.filter(test=>test.duration);
let longestduration = 0;
let testname = null;
for (let x of tests)
{
    if(x.duration > longestduration)
    {
        longestduration =x.duration;
        testname = x.name;
    }
        
}
console.log('Test name is: '+testname);
let Passes=0, Failures =0;
testCasesa.filter(test=>test.status === 'PASS' ? Passes++ : Failures++);
console.log('Passes: ' +Passes);
console.log('Failures: '+Failures);