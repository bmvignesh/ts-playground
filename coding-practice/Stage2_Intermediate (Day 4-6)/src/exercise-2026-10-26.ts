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

for(let a of numbers)
{
    console.log(a);
}