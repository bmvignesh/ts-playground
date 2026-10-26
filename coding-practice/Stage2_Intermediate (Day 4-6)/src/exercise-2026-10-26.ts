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
console.log('Sum of array is:' +sum);
//largest number
const marks: number[] = [65, 72, 91, 88, 54];
let largest = 0;
for(let a=0;a<marks.length;a++)
{
    if(marks[a]>largest)
        largest = marks[a];
}
console.log('Largest number in the array is: ' +largest);